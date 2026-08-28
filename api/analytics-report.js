const { getReport, ALLOWED_TYPES } = require('../lib/analytics-store');

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function page(bodyHtml) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width,initial-scale=1">` +
    `<title>Petssible Click Report</title>` +
    `<style>
      body{font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:900px;margin:40px auto;padding:0 20px;color:#232323;background:#fbfaf7}
      h1{font-size:28px;margin-bottom:4px}
      h2{font-size:18px;margin-top:40px;border-bottom:1px solid #ddd;padding-bottom:6px}
      table{border-collapse:collapse;width:100%;margin-top:12px;font-size:14px}
      th,td{text-align:left;padding:6px 10px;border-bottom:1px solid #eee}
      th{color:#657b73;font-size:12px;text-transform:uppercase;letter-spacing:.05em}
      .totals{display:flex;gap:24px;margin-top:16px}
      .stat{background:#f0ece4;padding:16px 24px;min-width:140px}
      .stat .num{font-size:32px;font-weight:800;color:#ef8536}
      .stat .label{font-size:12px;color:#657b73;text-transform:uppercase;letter-spacing:.05em}
      .muted{color:#777}
    </style></head><body>${bodyHtml}</body></html>`;
}

module.exports = async (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');

  const key = req.query && req.query.key;
  const secret = process.env.ANALYTICS_REPORT_SECRET;
  if (!secret || !key || key !== secret) {
    res.status(401).setHeader('Content-Type', 'text/html');
    res.send(page('<h1>Not authorized</h1><p class="muted">Missing or incorrect key.</p>'));
    return;
  }

  const report = await getReport();

  if (!report.connected) {
    res.status(200).setHeader('Content-Type', 'text/html');
    res.send(page(
      '<h1>Petssible Click Report</h1>' +
      '<p>Redis isn\'t connected yet.</p>' +
      '<p class="muted">In the Vercel dashboard, go to the project\'s <strong>Storage</strong> tab → ' +
      'Create Database → <strong>Upstash for Redis</strong> (free tier) → connect it to this project, ' +
      'then redeploy. Once connected, this page will show real numbers.</p>'
    ));
    return;
  }

  const { totals, last7, byDay, byLocation } = report;

  const totalsHtml = `<div class="totals">` + ALLOWED_TYPES.map((t) =>
    `<div class="stat"><div class="num">${totals[t]}</div><div class="label">${escapeHtml(t)} (all time)</div></div>`
  ).join('') + `</div>`;

  const last7Html = `<div class="totals">` + ALLOWED_TYPES.map((t) =>
    `<div class="stat"><div class="num">${last7[t]}</div><div class="label">${escapeHtml(t)} (last 7 days)</div></div>`
  ).join('') + `</div>`;

  const dayRows = byDay.slice().reverse().map((row) =>
    `<tr><td>${row.day}</td>${ALLOWED_TYPES.map((t) => `<td>${row[t]}</td>`).join('')}</tr>`
  ).join('');
  const dayTable = `<table><thead><tr><th>Day</th>${ALLOWED_TYPES.map((t) => `<th>${escapeHtml(t)}</th>`).join('')}</tr></thead><tbody>${dayRows}</tbody></table>`;

  const locationSections = ALLOWED_TYPES.map((t) => {
    const rows = byLocation[t] || [];
    const rowsHtml = rows.length
      ? rows.map((r) => `<tr><td>${escapeHtml(r.location)}</td><td>${r.count}</td></tr>`).join('')
      : `<tr><td colspan="2" class="muted">No clicks recorded yet.</td></tr>`;
    return `<h2>${escapeHtml(t)} by page</h2><table><thead><tr><th>Page</th><th>Clicks</th></tr></thead><tbody>${rowsHtml}</tbody></table>`;
  }).join('');

  res.status(200).setHeader('Content-Type', 'text/html');
  res.send(page(
    `<h1>Petssible Click Report</h1>` +
    `<p class="muted">Self-hosted counts, separate from Vercel Web Analytics' event cap.</p>` +
    totalsHtml +
    `<h2>Last 7 days</h2>` +
    last7Html +
    `<h2>Last 30 days</h2>` +
    dayTable +
    locationSections
  ));
};
