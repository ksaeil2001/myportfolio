#!/bin/bash
set -euo pipefail

# Directory where the npm cache is stored
CACHE_DIR="${NPM_CACHE_DIR:-$(pwd)/.npm_cache}"

if [ -f "npm_cache.tar.gz" ] && [ ! -d "$CACHE_DIR" ]; then
  echo "Extracting npm cache archive..."
  mkdir -p "$CACHE_DIR"
  tar -xzf npm_cache.tar.gz -C "$CACHE_DIR"
fi

export NPM_CONFIG_CACHE="$CACHE_DIR"
export NPM_CONFIG_FUND="false"
export NPM_CONFIG_AUDIT="false"

npm ci --cache "$CACHE_DIR" --prefer-offline
