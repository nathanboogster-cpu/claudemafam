const { recordClick } = require('../lib/analytics-store');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: true });
    return;
  }
  try {
    let body = req.body;
    if (!body || typeof body === 'string') {
      body = JSON.parse(body || '{}');
    }
    const { type, location } = body || {};
    await recordClick(type, location);
  } catch (err) {
    // Never let a malformed request or a Redis hiccup break the page that called us.
  }
  res.status(200).json({ ok: true });
};
