const os = require('os');
const path = require('path');

// Credentials live outside the repo by default, so there is no way to
// accidentally `git add` them. Override with GSC_CREDENTIALS_DIR if you
// want a different location.
const CREDENTIALS_DIR =
  process.env.GSC_CREDENTIALS_DIR || path.join(os.homedir(), '.config', 'petssible-gsc');

const CLIENT_SECRET_PATH = path.join(CREDENTIALS_DIR, 'client_secret.json');
const TOKEN_PATH = path.join(CREDENTIALS_DIR, 'token.json');

const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly'];

// Fixed loopback port so it's easy to register as an authorized redirect
// URI in Google Cloud Console. 127.0.0.1 only — never binds 0.0.0.0.
const LOOPBACK_PORT = 51823;
const REDIRECT_URI = `http://127.0.0.1:${LOOPBACK_PORT}`;

module.exports = {
  CREDENTIALS_DIR,
  CLIENT_SECRET_PATH,
  TOKEN_PATH,
  SCOPES,
  LOOPBACK_PORT,
  REDIRECT_URI,
};
