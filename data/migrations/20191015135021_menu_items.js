
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menu_items', tbl => {
    tbl.increments().unique().primary()
    tbl.string('item').notNullable()
    tbl.text('description')
    tbl.decimal('price').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('menu_items')
};
