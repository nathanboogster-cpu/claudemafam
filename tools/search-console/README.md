# Search Console CLI (local SEO analysis only)

A small local-only CLI for querying the Google Search Console API. It is
**not** deployed to Vercel and is not referenced by the production site —
it's a separate tool with its own `package.json`, meant to be run on your
own machine via a local Claude Code session (or plain `node`).

Read-only scope: `https://www.googleapis.com/auth/webmasters.readonly`.

## Setup (run these locally, not in a remote/cloud session)

1. Install dependencies:

   ```
   cd tools/search-console
   npm install
   ```

2. In Google Cloud Console, open your **Desktop app** OAuth 2.0 client and
   add this authorized redirect URI (required for the loopback flow this
   tool uses):

   ```
   http://127.0.0.1:51823
   ```

3. Download the client's JSON (Credentials > your Desktop client > Download
   JSON) and save it to:

   ```
   ~/.config/petssible-gsc/client_secret.json
   ```

   This path is **outside the git repo** on purpose — create the directory
   first if it doesn't exist:

   ```
   mkdir -p ~/.config/petssible-gsc
   chmod 700 ~/.config/petssible-gsc
   ```

   Never paste the client secret into a chat with Claude or commit the
   JSON file anywhere. It only needs to exist at that local path.

4. Run the one-time authorization flow:

   ```
   npm run auth
   ```

   This opens a URL for you to visit in your own browser. After you
   approve read-only access, Google redirects to `http://127.0.0.1:51823`,
   which this script is listening on locally, and it saves the resulting
   token to `~/.config/petssible-gsc/token.json` (mode 600). The access
   token auto-refreshes on later runs; you only need to redo this step if
   the refresh token is revoked.

5. Confirm access:

   ```
   npm run sites
   ```

## Usage

```
node query.js --site https://www.petssibleus.com/ --start 2026-08-01 --end 2026-08-31
node query.js --site https://www.petssibleus.com/ --start 2026-08-01 --end 2026-08-31 \
  --dimensions page,query --limit 50
node query.js --site https://www.petssibleus.com/ --start 2026-08-01 --end 2026-08-31 \
  --compare-start 2026-07-01 --compare-end 2026-07-31 --dimensions page
```

Flags:

- `--site` — exact property URL as it appears in `npm run sites` output
- `--start` / `--end` — date range, `YYYY-MM-DD`
- `--dimensions` — comma-separated: `query,page,date,country,device` (default `query`)
- `--limit` — row limit, default 25, max 25000
- `--search-type` — `web` (default), `image`, `video`, or `news`
- `--page-filter` / `--query-filter` — substring filter on page URL or search query
- `--compare-start` / `--compare-end` — a second period to diff clicks/impressions/position against

## Where credentials live

| File | Location | In git? |
|---|---|---|
| `client_secret.json` | `~/.config/petssible-gsc/` | No — outside repo, also gitignored as defense in depth |
| `token.json` (access + refresh token) | `~/.config/petssible-gsc/` | No — outside repo, also gitignored as defense in depth |

Override the directory with `GSC_CREDENTIALS_DIR=/some/other/path` if you'd
rather keep it elsewhere.
