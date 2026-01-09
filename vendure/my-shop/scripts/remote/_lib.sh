#!/usr/bin/env bash
set -euo pipefail

resolve_repo_root() {
  if command -v git >/dev/null 2>&1; then
    local root
    root="$(git rev-parse --show-toplevel 2>/dev/null || true)"
    if [ -n "$root" ]; then
      echo "$root"
      return 0
    fi
  fi

  local dir
  dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

  while [ "$dir" != "/" ]; do
    if [ -f "$dir/package.json" ] && [ -d "$dir/apps" ]; then
      echo "$dir"
      return 0
    fi
    dir="$(dirname "$dir")"
  done

  echo "Unable to resolve repo root" >&2
  return 1
}

