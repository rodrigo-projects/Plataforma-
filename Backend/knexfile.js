module.exports = {
  
  client: 'postgres',
  connection: {
    database: 'teste',
    user:     'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
