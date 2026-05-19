#!/bin/bash
# session-start.sh - pull latest before every session
#
# Ensures the agent always works on the latest version of the company brain.
# Add this to .claude/settings.json under hooks.SessionStart.

set -euo pipefail

echo "Pulling latest from origin main..." >&2
git -C "${CLAUDE_PROJECT_DIR:-$(pwd)}" pull origin main --ff-only 2>&1 || echo "git pull skipped (local changes or diverged history)" >&2
