# Network Policy and Font Download Guide

This document summarizes how to handle network restrictions that block access to `raw.githubusercontent.com`, which is required for downloading fonts used by `scripts/generateResume.ts`.

## 1. Verify Network Policy
- Check whether `raw.githubusercontent.com` is blocked on build and deployment environments.
- If blocked, request IT or the security team to allow access to this domain for font downloads.

## 2. Workaround if Whitelisting is Not Possible
- Pre-download required font files and store them inside `public/fonts/` or an internal server.
- Update the font path in `scripts/generateResume.ts` or provide a custom download URL that is accessible within your network.
- Ensure fallback fonts are available so that the build does not fail even when external fetches are blocked.
- When running `npm run generate:resume` in a restricted environment, set `OFFLINE_MODE=true` to skip any network downloads.

## 3. Document Policy Changes
- Record any firewall policy updates and troubleshooting steps in the `README.md` Changelog.
- Keep this document up to date when network rules change or when new download mirrors are introduced.
