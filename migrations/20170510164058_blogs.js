exports.up = function (knex, Promise) {
  return knex.schema.createTable('blogs', function (table) {
    table.increments('id').primary()
    table.string('user_id')
    table.string('title')
    table.string('content')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('blogs')
}
