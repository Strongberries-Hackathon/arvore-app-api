
exports.up = (knex) => {
    return knex.schema
    .createTable('activity', (table) => {
       table.increments('id');
       table.string('book_id', 50).notNullable();
       table.string('description', 255).notNullable();
       table.string('studant_id', 50).notNullable();
       table.string('type', 255).notNullable();
       table.string('status', 255);
       table.string('uploads', 255)
      })
};

exports.down = (knex) => {
  
};
