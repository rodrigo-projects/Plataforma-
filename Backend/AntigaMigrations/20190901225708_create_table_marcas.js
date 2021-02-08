
  exports.up = function (knex, Promise) {
    return knex.schema.createTable('marcas', table => {
        table.increments('id').primary()
        table.string('marca').notNull().unique()
        table.string('descrição').notNull()
        // table.string('data')
        // table.string('ip')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('marcas')
};