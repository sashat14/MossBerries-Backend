
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments().unique().notNullable().primary()
    tbl.string("name")
    tbl.string("address")
    tbl.string("phone")
    tbl.string("email")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('users')
};
