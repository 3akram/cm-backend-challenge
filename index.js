(async () => {
  process.on('uncaughtException', (err) => {
    console.error('run::: Unknown error ::', err);
    console.error('run:: exiting with code (1) ....');
    process.exit(1);
  });

  // Start initializing Postgres DB connection
  const Database = require('./src/services/database.service');
  const database = new Database();

  // Connect to Postgres DB
  await database.getService().init();

  // Start our server
  require('./src/server');
})();
