
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', tbl => {
      tbl.increments().unique().primary()
      tbl.integer('customer_id').unsigned()
      tbl.foreign('customer_id')
      .references('id')
      .inTable('users')
      tbl.integer('item_id').unsigned()
      tbl.foreign('item_id')
      .references('id')
      .inTable('menu_items')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('orders')
  
};
