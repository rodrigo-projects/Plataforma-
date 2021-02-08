// Update with your config settings.

module.exports = {



  client: 'postgresql',
  connection: {
    database: 'teste',
    user:     'postgres',
    password: '123456'
  },
  pool: {
    min: 1,
    max: 100
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
