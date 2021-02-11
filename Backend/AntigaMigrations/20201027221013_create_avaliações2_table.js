
exports.up = function (knex, Promise) {
    return knex.schema.createTable('avaliação2', table => {
        table.increments('id').primary()
        table.string('conforto').notNull()//.unique()
        table.string('sexo').notNull()//.unique()
        table.float('idade').notNull()
        table.float('peso').notNull()
        table.float('altura').notNull()
        table.float('comp_p').notNull()
        table.float('comp_b').notNull()
        table.integer('bx').notNull()
        table.integer('vx').notNull()
        table.integer('vangular').notNull()
        table.integer('px').notNull()
        table.integer('pz').notNull()
        table.string('ref_car').notNull()
        // table.string('data')
        // table.string('ip')
    })
  }; 
  
  exports.down = function (knex, Promise) {
    // return knex.schema.dropTable('avaliação2')
  };
  