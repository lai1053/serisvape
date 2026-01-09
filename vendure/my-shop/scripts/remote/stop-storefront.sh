#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=./_lib.sh
. "$SCRIPT_DIR/_lib.sh"

ROOT_DIR="$(resolve_repo_root)"
cd "$ROOT_DIR"

PID_FILE="pids/storefront.pid"

if [ ! -f "$PID_FILE" ]; then
  echo "No storefront PID file at ${PID_FILE}; nothing to stop."
  exit 0
fi

PID="$(cat "$PID_FILE" || true)"
if [ -n "${PID:-}" ] && kill -0 "$PID" 2>/dev/null; then
  kill "$PID"
  echo "Stopped storefront (pid ${PID})."
else
  echo "Storefront not running (stale pid ${PID})."
fi

rm -f "$PID_FILE"
