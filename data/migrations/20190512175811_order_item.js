
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order_item', (table) => {
    table.increments()
         .unique()
         .primary();

    table.string('options');
    table.text('instructions');
    table.integer('quantity');
    
    table.integer('menu_item_id')
         .unsigned();
    
    table.foreign('menu_item_id')
         .references('menu_item.id')
         .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('order_item');
  
};
