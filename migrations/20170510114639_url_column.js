exports.up = function (knex, Promise) {
  return knex.schema.table('profiles', function (table) {
    table.string('image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropColumn('image')
}
