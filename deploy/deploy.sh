#!/usr/bin/env bash
# Build and publish the site to the axg.prai.co host.
#
#   ./deploy/deploy.sh              build, then rsync to the server
#   DRY_RUN=1 ./deploy/deploy.sh    show what would change, upload nothing
#
# Requires ssh access to the host as root (key auth) and node/npm locally.
set -euo pipefail

HOST="${AXG_HOST:-root@137.184.24.183}"
DEST="${AXG_DEST:-/var/www/alloyx/}"
URL="${AXG_URL:-https://axg.prai.co/}"

cd "$(dirname "$0")/.."

echo "==> building"
npm run build

echo "==> uploading to ${HOST}:${DEST}"
# compare by checksum: a rebuild touches every mtime, so a time-based
# comparison would re-upload all 16 MB on every deploy
RSYNC_FLAGS=(-az --checksum --delete --stats)
[ -n "${DRY_RUN:-}" ] && RSYNC_FLAGS+=(--dry-run)
rsync "${RSYNC_FLAGS[@]}" -e "ssh -o StrictHostKeyChecking=accept-new" dist/ "${HOST}:${DEST}"

[ -n "${DRY_RUN:-}" ] && { echo "==> dry run, nothing changed"; exit 0; }

echo "==> verifying every deployed file matches the local build"
local_sums=$(cd dist && find . -type f | sort | while read -r f; do echo "$(md5 -q "$f")  ${f#./}"; done)
remote_sums=$(ssh "$HOST" "cd ${DEST} && find . -type f | sort | while read -r f; do echo \"\$(md5sum \"\$f\" | cut -d' ' -f1)  \${f#./}\"; done")

if [ "$local_sums" = "$remote_sums" ]; then
  echo "    $(echo "$local_sums" | wc -l | tr -d ' ') files match byte for byte"
else
  echo "    MISMATCH between local build and server:"
  diff <(echo "$local_sums") <(echo "$remote_sums") || true
  exit 1
fi

echo "==> ${URL} -> $(curl -s -o /dev/null -w '%{http_code}' "$URL")"
