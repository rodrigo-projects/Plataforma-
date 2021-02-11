// Update with your config settings.

module.exports = {



  client: 'postgresql',
  connection: {
    database: 'teste',
    user:     'postgres',
    password: '123654'
  },
  pool: {
    min: 2,
    max: 20
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
