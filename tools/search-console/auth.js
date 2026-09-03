// One-time (or re-run-when-expired) OAuth authorization for the Search
// Console CLI. Run this locally: `npm run auth` from tools/search-console.
//
// This starts a temporary web server on 127.0.0.1 only, opens (or prints)
// the Google consent screen URL, and waits for the browser redirect that
// carries the authorization code. Nothing here ever leaves your machine.

const fs = require('fs');
const http = require('http');
const { google } = require('googleapis');
const {
  CREDENTIALS_DIR,
  CLIENT_SECRET_PATH,
  TOKEN_PATH,
  SCOPES,
  LOOPBACK_PORT,
  REDIRECT_URI,
} = require('./lib/config');

function loadClientSecret() {
  if (!fs.existsSync(CLIENT_SECRET_PATH)) {
    console.error(`\nNo client_secret.json found at:\n  ${CLIENT_SECRET_PATH}\n`);
    console.error('Download it from Google Cloud Console (APIs & Services > Credentials >');
    console.error('your Desktop OAuth client > Download JSON) and save it to that exact path.');
    console.error(`\nCreate the directory first if needed:\n  mkdir -p ${CREDENTIALS_DIR}\n`);
    process.exit(1);
  }
  const parsed = JSON.parse(fs.readFileSync(CLIENT_SECRET_PATH, 'utf8'));
  if (!parsed.installed) {
    console.error('client_secret.json does not look like a Desktop app client (expected an "installed" key).');
    process.exit(1);
  }
  return parsed.installed;
}

async function main() {
  const secret = loadClientSecret();
  const oAuth2Client = new google.auth.OAuth2(secret.client_id, secret.client_secret, REDIRECT_URI);

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline', // required to get a refresh_token
    prompt: 'consent', // force a fresh refresh_token even on repeat runs
    scope: SCOPES,
  });

  console.log('\n1. Open this URL in your browser and approve read-only Search Console access:\n');
  console.log(`   ${authUrl}\n`);
  console.log(`2. Waiting for the redirect back to ${REDIRECT_URI} ...\n`);

  const code = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, REDIRECT_URI);
      if (url.pathname !== '/') return;

      const error = url.searchParams.get('error');
      const authCode = url.searchParams.get('code');

      res.setHeader('Content-Type', 'text/html');
      if (error) {
        res.end(`<h1>Authorization failed</h1><p>${error}</p><p>You can close this tab.</p>`);
        server.close();
        reject(new Error(`OAuth error: ${error}`));
        return;
      }

      res.end('<h1>Authorized</h1><p>Search Console access granted. You can close this tab.</p>');
      server.close();
      resolve(authCode);
    });

    // 127.0.0.1 only, never 0.0.0.0 — this must not be reachable off-machine.
    server.listen(LOOPBACK_PORT, '127.0.0.1');
  });

  const { tokens } = await oAuth2Client.getToken(code);

  fs.mkdirSync(CREDENTIALS_DIR, { recursive: true, mode: 0o700 });
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2), { mode: 0o600 });

  console.log(`Saved token to ${TOKEN_PATH} (chmod 600).`);
  console.log('Run `npm run sites` to confirm access.');
}

main().catch((err) => {
  console.error('Authorization failed:', err.message);
  process.exit(1);
});
