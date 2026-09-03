const { getSearchConsole } = require('./lib/client');

async function main() {
  const webmasters = getSearchConsole();
  const { data } = await webmasters.sites.list();

  if (!data.siteEntry || data.siteEntry.length === 0) {
    console.log('No Search Console properties accessible with this account.');
    return;
  }

  console.log('Search Console properties accessible to this account:\n');
  for (const site of data.siteEntry) {
    console.log(`  ${site.siteUrl}  (permission: ${site.permissionLevel})`);
  }
}

main().catch((err) => {
  console.error('Failed to list sites:', err.message);
  process.exit(1);
});
