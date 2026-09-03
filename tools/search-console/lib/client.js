const fs = require('fs');
const { google } = require('googleapis');
const { CLIENT_SECRET_PATH, TOKEN_PATH, REDIRECT_URI } = require('./config');

function loadJson(filePath, friendlyName) {
  if (!fs.existsSync(filePath)) {
    console.error(`Missing ${friendlyName}: ${filePath}`);
    console.error('Run `npm run auth` first (see tools/search-console/README.md).');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Returns an authenticated OAuth2 client, ready to pass to google.webmasters().
function getAuthedClient() {
  const secret = loadJson(CLIENT_SECRET_PATH, 'client_secret.json').installed;
  if (!secret) {
    console.error('client_secret.json does not look like a Desktop app client (missing "installed" key).');
    process.exit(1);
  }
  const token = loadJson(TOKEN_PATH, 'token.json');

  const oAuth2Client = new google.auth.OAuth2(secret.client_id, secret.client_secret, REDIRECT_URI);
  oAuth2Client.setCredentials(token);

  // Persist refreshed access tokens back to disk so re-auth isn't needed
  // every run (read-only scope, so this file never grants write access).
  oAuth2Client.on('tokens', (newTokens) => {
    const merged = { ...token, ...newTokens };
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(merged, null, 2), { mode: 0o600 });
  });

  return oAuth2Client;
}

function getSearchConsole() {
  return google.webmasters({ version: 'v3', auth: getAuthedClient() });
}

module.exports = { getAuthedClient, getSearchConsole };
