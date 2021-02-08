
exports.up = function (knex, Promise) {
    return knex.schema.createTable('carros', table => {
        table.increments('id').primary()
        table.string('carro').notNull()//.unique()
        table.string('descrição').notNull()//.unique()
        table.integer('bx').notNull()
        table.integer('vx').notNull()
        table.integer('vangular').notNull()
        table.integer('px').notNull()
        table.integer('pz').notNull()
        table.string('ref_marca').notNull()
        // table.string('data')
        // table.string('ip')
    })
  }; 
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('carros')
  };
  