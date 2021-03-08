///////////PC
module.exports = {
  
  client: 'pg',
  connection: {
    database: 'fca',
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




//////Raspberry
/*
module.exports = {
  
  client: 'pg',
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

*/ 
