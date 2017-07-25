const config = {
  client: 'postgresql',
  connection: {
    host: 'postgres',
    database: 'vitta-challenge',
    user: 'vitta',
    password: 'UaHq3MksCSGeCXeN'
  },
  debug: false,
  migrations: {
    tableName: 'migrations',
    directory: './app/db/migrations'
  },
  pool: {
    min: 1,
    max: 10
  },
  seeds: {
    directory: './app/db/seeds'
  },
  useNullAsDefault: true
};
const knex = require('knex')(config);

async function connect() {
  await knex.migrate.latest();
}

module.exports = { connect, knex };
