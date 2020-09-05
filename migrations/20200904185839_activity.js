
exports.up = (knex) => {
    return knex.schema
    .createTable('activity', function (table) {
       table.increments('id');
       table.string('description', 255).notNullable();
       table.string('type', 255).notNullable();
       table.string('studant_id', 50).notNullable();
       table.string('book_id', 50).notNullable();
    })
    .createTable('products', function (table) {
       table.increments('id');
       table.decimal('price').notNullable();
       table.string('name', 1000).notNullable();
    });  
};

exports.down = (knex) => {
  
};
