#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=./_lib.sh
. "$SCRIPT_DIR/_lib.sh"

ROOT_DIR="$(resolve_repo_root)"
cd "$ROOT_DIR"

mkdir -p logs pids

for pid_file in pids/server.pid pids/worker.pid; do
  if [ -f "$pid_file" ] && kill -0 "$(cat "$pid_file")" 2>/dev/null; then
    kill "$(cat "$pid_file")" || true
  fi
done

export APP_ENV="prod"
export PORT="3002"

export DB_HOST="127.0.0.1"
export DB_PORT="6543"
export DB_NAME="vendure"
export DB_SCHEMA="public"
export DB_USERNAME="vendure"
export DB_PASSWORD="vendure123"

export SUPERADMIN_USERNAME="admin"
export SUPERADMIN_PASSWORD="admin123"
export COOKIE_SECRET="jk324hjk234hjk234hjk234b324jk"

export ASSET_URL_PREFIX="http://175.178.87.111:3002/assets/"

nohup env NODE_ENV=production PORT="$PORT" npm run start:server -w server > logs/server.out 2>&1 & echo $! > pids/server.pid
nohup env NODE_ENV=production PORT="$PORT" npm run start:worker -w server > logs/worker.out 2>&1 & echo $! > pids/worker.pid

echo "Server started (pid $(cat pids/server.pid)) on port ${PORT}"
echo "Worker started (pid $(cat pids/worker.pid))"
