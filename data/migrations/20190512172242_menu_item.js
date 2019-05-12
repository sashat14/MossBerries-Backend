
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menu_item', (table) => {
    table.increments()
         .unique()
         .primary();

    table.string('name');
    table.text('description');
    table.string('price');
    table.string('tags');
    table.string('photo');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('menu_item');
};
