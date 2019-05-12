
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order', (table) => {
    table.increments()
         .unique()
         .primary();

    table.string('order_number');
    table.boolean('isDelivery');

    table.integer('order_item_id')
         .unsigned();

    table.foreign('order_item_id')
         .references('order_item.id')
         .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('order');
};
