#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="${REMOTE_HOST:-tengxun}"
REMOTE_DIR="${REMOTE_DIR:-my-shop}"
SERVER_PORT="${SERVER_PORT:-3002}"
STOREFRONT_PORT="${STOREFRONT_PORT:-3003}"
NO_PROXY_SSH="${NO_PROXY_SSH:-1}"
SSH_OPTS="${SSH_OPTS:-}"

SSH_OPTS_ARR=()
if [ "$NO_PROXY_SSH" = "1" ]; then
  SSH_OPTS_ARR+=(-o ProxyCommand=none -o ProxyJump=none)
fi
if [ -n "$SSH_OPTS" ]; then
  # shellcheck disable=SC2206
  SSH_OPTS_ARR+=($SSH_OPTS)
fi

RSYNC_SSH="ssh"
if [ "${#SSH_OPTS_ARR[@]}" -gt 0 ]; then
  RSYNC_SSH="ssh ${SSH_OPTS_ARR[*]}"
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "==> Preparing local workspace"
cd "$ROOT_DIR"
echo "Skipping local build (remote build will be used)."

echo "==> Preparing remote directory"
ssh "${SSH_OPTS_ARR[@]}" "$REMOTE_HOST" "mkdir -p \"$REMOTE_DIR\""

echo "==> Syncing files to ${REMOTE_HOST}:${REMOTE_DIR}"
rsync -az --delete \
  -e "$RSYNC_SSH" \
  --exclude node_modules \
  --exclude .git \
  --exclude .env \
  --exclude .next/cache \
  --exclude .DS_Store \
  "$ROOT_DIR/" "${REMOTE_HOST}:${REMOTE_DIR}/"

echo "==> Installing production dependencies on remote"
ssh "${SSH_OPTS_ARR[@]}" "$REMOTE_HOST" "cd \"$REMOTE_DIR\" && node -v && npm -v && npm ci"

echo "==> Building & starting server on remote (needed for storefront build)"
ssh "${SSH_OPTS_ARR[@]}" "$REMOTE_HOST" "cd \"$REMOTE_DIR\" && \
  set -a; [ -f .env ] && . ./.env; set +a; \
  npm run build -w server && npm run build:dashboard -w server && \
  mkdir -p pids logs && \
  if [ -f pids/server.pid ] && kill -0 \$(cat pids/server.pid) 2>/dev/null; then kill \$(cat pids/server.pid); fi && \
  nohup env NODE_ENV=production PORT=${SERVER_PORT} npm run start -w server > logs/server.out 2>&1 & echo \$! > pids/server.pid"

echo "==> Waiting for Vendure Shop API to be ready"
ssh "${SSH_OPTS_ARR[@]}" "$REMOTE_HOST" "set -e; \
  for i in \$(seq 1 60); do \
    code=\$(curl -s -o /dev/null -w '%{http_code}' -X POST \"http://127.0.0.1:${SERVER_PORT}/shop-api\" \
      -H 'content-type: application/json' \
      --data '{\"query\":\"query { activeChannel { id code } }\"}'); \
    if [ \"\$code\" = \"200\" ]; then echo 'Vendure Shop API ready'; exit 0; fi; \
    sleep 1; \
  done; \
  echo 'Timed out waiting for Vendure Shop API'; exit 1"

echo "==> Building storefront on remote"
ssh "${SSH_OPTS_ARR[@]}" "$REMOTE_HOST" "cd \"$REMOTE_DIR\" && \
  env NODE_ENV=production \
    VENDURE_SHOP_API_URL=http://127.0.0.1:${SERVER_PORT}/shop-api \
    NEXT_PUBLIC_VENDURE_SHOP_API_URL=http://127.0.0.1:${SERVER_PORT}/shop-api \
    NEXT_PUBLIC_SITE_URL=http://127.0.0.1:${STOREFRONT_PORT} \
    npm run build -w storefront"

echo "==> Pruning dev dependencies on remote"
ssh "${SSH_OPTS_ARR[@]}" "$REMOTE_HOST" "cd \"$REMOTE_DIR\" && npm prune --omit=dev"

echo "==> Restarting services on remote"
ssh "${SSH_OPTS_ARR[@]}" "$REMOTE_HOST" "cd \"$REMOTE_DIR\" && mkdir -p pids logs && \
  set -a; [ -f .env ] && . ./.env; set +a; \
  if [ -f pids/server.pid ] && kill -0 \$(cat pids/server.pid) 2>/dev/null; then :; else rm -f pids/server.pid 2>/dev/null || true; fi && \
  if [ -f pids/storefront.pid ] && kill -0 \$(cat pids/storefront.pid) 2>/dev/null; then kill \$(cat pids/storefront.pid); fi && \
  nohup env NODE_ENV=production PORT=${STOREFRONT_PORT} npm run start -w storefront > logs/storefront.out 2>&1 & echo \$! > pids/storefront.pid"

echo "==> Done"
