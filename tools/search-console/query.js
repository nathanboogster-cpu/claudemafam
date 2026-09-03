// Query Search Console performance data: clicks, impressions, CTR, average
// position, broken down by query / page / date / country / device, with
// optional comparison against a second date range.
//
// Examples:
//   node query.js --site https://www.petssibleus.com/ --start 2026-08-01 --end 2026-08-31
//   node query.js --site https://www.petssibleus.com/ --start 2026-08-01 --end 2026-08-31 \
//     --dimensions page,query --limit 50
//   node query.js --site https://www.petssibleus.com/ --start 2026-08-01 --end 2026-08-31 \
//     --compare-start 2026-07-01 --compare-end 2026-07-31 --dimensions page

const { getSearchConsole } = require('./lib/client');

const VALID_DIMENSIONS = new Set(['query', 'page', 'date', 'country', 'device']);

function parseArgs(argv) {
  const opts = { dimensions: ['query'], limit: 25, searchType: 'web' };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) continue;
    const key = arg.slice(2);
    const value = argv[i + 1];
    switch (key) {
      case 'site':
        opts.site = value;
        i += 1;
        break;
      case 'start':
        opts.start = value;
        i += 1;
        break;
      case 'end':
        opts.end = value;
        i += 1;
        break;
      case 'compare-start':
        opts.compareStart = value;
        i += 1;
        break;
      case 'compare-end':
        opts.compareEnd = value;
        i += 1;
        break;
      case 'dimensions':
        opts.dimensions = value.split(',').map((d) => d.trim()).filter(Boolean);
        i += 1;
        break;
      case 'limit':
        opts.limit = Math.min(parseInt(value, 10) || 25, 25000);
        i += 1;
        break;
      case 'search-type':
        opts.searchType = value;
        i += 1;
        break;
      case 'page-filter':
        opts.pageFilter = value;
        i += 1;
        break;
      case 'query-filter':
        opts.queryFilter = value;
        i += 1;
        break;
      default:
        console.error(`Unknown flag: --${key}`);
        process.exit(1);
    }
  }
  return opts;
}

function validate(opts) {
  if (!opts.site || !opts.start || !opts.end) {
    console.error('Usage: node query.js --site <url> --start YYYY-MM-DD --end YYYY-MM-DD [options]');
    console.error('\nOptions:');
    console.error('  --dimensions query,page,date,country,device   (default: query)');
    console.error('  --limit N                                     (default: 25, max 25000)');
    console.error('  --search-type web|image|video|news             (default: web)');
    console.error('  --page-filter <substring>                     (contains filter on page URL)');
    console.error('  --query-filter <substring>                    (contains filter on search query)');
    console.error('  --compare-start / --compare-end YYYY-MM-DD    (second period to diff against)');
    process.exit(1);
  }
  for (const d of opts.dimensions) {
    if (!VALID_DIMENSIONS.has(d)) {
      console.error(`Invalid dimension "${d}". Valid: ${[...VALID_DIMENSIONS].join(', ')}`);
      process.exit(1);
    }
  }
}

function buildFilters(opts) {
  const groups = [];
  if (opts.pageFilter) {
    groups.push({ filters: [{ dimension: 'page', operator: 'contains', expression: opts.pageFilter }] });
  }
  if (opts.queryFilter) {
    groups.push({ filters: [{ dimension: 'query', operator: 'contains', expression: opts.queryFilter }] });
  }
  return groups.length ? groups : undefined;
}

async function runQuery(webmasters, opts, startDate, endDate) {
  const { data } = await webmasters.searchanalytics.query({
    siteUrl: opts.site,
    requestBody: {
      startDate,
      endDate,
      dimensions: opts.dimensions,
      rowLimit: opts.limit,
      type: opts.searchType,
      dimensionFilterGroups: buildFilters(opts),
    },
  });
  return data.rows || [];
}

function fmtRow(row, dimensions) {
  const keys = {};
  dimensions.forEach((d, i) => {
    keys[d] = row.keys[i];
  });
  return {
    ...keys,
    clicks: row.clicks,
    impressions: row.impressions,
    ctr: `${(row.ctr * 100).toFixed(2)}%`,
    position: row.position.toFixed(1),
  };
}

function keyString(row, dimensionCount) {
  return row.keys.slice(0, dimensionCount).join(' | ');
}

function printComparison(dimensions, primaryRows, compareRows) {
  const primaryMap = new Map(primaryRows.map((r) => [keyString(r, dimensions.length), r]));
  const compareMap = new Map(compareRows.map((r) => [keyString(r, dimensions.length), r]));
  const allKeys = new Set([...primaryMap.keys(), ...compareMap.keys()]);

  const table = [...allKeys].map((key) => {
    const p = primaryMap.get(key);
    const c = compareMap.get(key);
    const pClicks = p ? p.clicks : 0;
    const cClicks = c ? c.clicks : 0;
    const pImpr = p ? p.impressions : 0;
    const cImpr = c ? c.impressions : 0;
    return {
      [dimensions.join('/')]: key,
      clicks: pClicks,
      'clicks (prev)': cClicks,
      'clicks Δ': pClicks - cClicks,
      impressions: pImpr,
      'impressions (prev)': cImpr,
      position: p ? p.position.toFixed(1) : '-',
      'position (prev)': c ? c.position.toFixed(1) : '-',
    };
  });

  table.sort((a, b) => b.clicks - a.clicks);
  console.table(table);
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  validate(opts);

  const webmasters = getSearchConsole();
  const primaryRows = await runQuery(webmasters, opts, opts.start, opts.end);

  if (opts.compareStart && opts.compareEnd) {
    console.log(`\nComparing ${opts.start}..${opts.end} vs ${opts.compareStart}..${opts.compareEnd}\n`);
    const compareRows = await runQuery(webmasters, opts, opts.compareStart, opts.compareEnd);
    printComparison(opts.dimensions, primaryRows, compareRows);
    return;
  }

  if (primaryRows.length === 0) {
    console.log('No data for that range/filters.');
    return;
  }

  console.log(`\n${opts.start}..${opts.end} — ${opts.site}\n`);
  console.table(primaryRows.map((r) => fmtRow(r, opts.dimensions)));
}

main().catch((err) => {
  console.error('Query failed:', err.message);
  process.exit(1);
});
