# Base44 Dev Environment

## What this is
A static HTML/CSS/JS portfolio site (Álvaro's portfolio). No build step, no backend, no package manager, no external API keys.

## How it runs
Served by `nginx:alpine` via `docker-compose.base44.yml`. Source is bind-mounted read-only at `/usr/share/nginx/html`. A custom `nginx.base44.conf` runs nginx as `root` so it can read the bind-mounted files regardless of host directory permissions.

- Preview port: 3000 (maps to nginx port 80)
- Health check: `GET /`
- Start: `docker compose -f docker-compose.base44.yml up -d`

## Editing
Edits to HTML/CSS/JS files are reflected immediately on browser refresh — nginx serves files directly from the bind mount. No reload needed unless nginx config changes.

## No secrets required
YouTube videos are embedded via iframe with hardcoded video IDs — no YouTube Data API key or other credentials are needed.
