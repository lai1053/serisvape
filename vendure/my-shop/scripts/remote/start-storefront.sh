#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=./_lib.sh
. "$SCRIPT_DIR/_lib.sh"

ROOT_DIR="$(resolve_repo_root)"
cd "$ROOT_DIR"

mkdir -p logs pids

if [ -f pids/storefront.pid ] && kill -0 "$(cat pids/storefront.pid)" 2>/dev/null; then
  kill "$(cat pids/storefront.pid)" || true
fi

export PORT="3003"
export HOSTNAME="0.0.0.0"

export VENDURE_SHOP_API_URL="http://127.0.0.1:3002/shop-api"
export NEXT_PUBLIC_VENDURE_SHOP_API_URL="http://175.178.87.111:3002/shop-api"
export NEXT_PUBLIC_SITE_URL="http://175.178.87.111:3003"

if [ ! -d "apps/storefront/.next" ]; then
  echo "No production build found at apps/storefront/.next; building storefront..."
  env NODE_ENV=production \
    VENDURE_SHOP_API_URL="$VENDURE_SHOP_API_URL" \
    NEXT_PUBLIC_VENDURE_SHOP_API_URL="$NEXT_PUBLIC_VENDURE_SHOP_API_URL" \
    NEXT_PUBLIC_SITE_URL="$NEXT_PUBLIC_SITE_URL" \
    npm run build -w storefront
fi

nohup env NODE_ENV=production npm run start -w storefront -- -p "$PORT" -H "$HOSTNAME" > logs/storefront.out 2>&1 & echo $! > pids/storefront.pid
echo "Storefront started (pid $(cat pids/storefront.pid)) on ${HOSTNAME}:${PORT}"
