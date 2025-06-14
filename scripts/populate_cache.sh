#!/bin/bash
set -euo pipefail

# Populate npm cache with all dependencies.
# Run this script in an environment with network access.

CACHE_DIR="${NPM_CACHE_DIR:-$(pwd)/.npm_cache}"

mkdir -p "$CACHE_DIR"
npm ci --cache "$CACHE_DIR"

tar -czf npm_cache.tar.gz -C "$CACHE_DIR" .

echo "npm cache archived to npm_cache.tar.gz"
