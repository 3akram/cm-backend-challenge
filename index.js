(async () => {
  process.on('uncaughtException', (err) => {
    console.error('run::: Unknown error ::', err);
    console.error('run:: exiting with code (1) ....');
    process.exit(1);
  });

  const config = require('./config.json');

  console.log('run::: Running server with configuration', config);

  // Start initializing Postgres DB connection
  const Database = require('./src/services/database.service');
  const database = new Database();

  // Connect to Postgres DB
  await database.getService().init();

  // Start our server
  require('./src/server');
})();
