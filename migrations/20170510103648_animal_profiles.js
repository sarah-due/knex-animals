exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.string('user_id')
    table.string('snack')
    table.string('habitat')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}
