module.exports = {
  
  client: 'pg',
  connection: {
    database: 'teste',
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
