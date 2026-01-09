#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=./_lib.sh
. "$SCRIPT_DIR/_lib.sh"

ROOT_DIR="$(resolve_repo_root)"
cd "$ROOT_DIR"

stopped_any=0
for pid_file in pids/server.pid pids/worker.pid; do
  if [ ! -f "$pid_file" ]; then
    continue
  fi

  PID="$(cat "$pid_file" || true)"
  if [ -n "${PID:-}" ] && kill -0 "$PID" 2>/dev/null; then
    kill "$PID" || true
    echo "Stopped $(basename "$pid_file" .pid) (pid ${PID})."
    stopped_any=1
  else
    echo "$(basename "$pid_file"): not running (stale pid ${PID})."
  fi
  rm -f "$pid_file"
done

if [ "$stopped_any" = "0" ]; then
  echo "No running server/worker processes found via PID files."
fi
