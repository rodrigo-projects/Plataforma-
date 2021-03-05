module.exports = {
  
  client: 'pg',
  connection: {
    database: 'fca',
    user:     'postgres',
    password: '123654'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
