// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('getUsers gets all users', function (t) {
  // One for each letter of the alphabet!
  var expected = 26
  return db.getUsers(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual)
    })
})

test('getUsers gets a single user', function (t) {
  var expected = 'Ambitious Aardvark'
  return db.getUser(99901, t.context.connection)
    .then(function (result) {
      var actual = result[0].name
      t.is(expected, actual)
    })
})


test('getProfile gets a profile', function (t) {
  var expected = 'Fascinated Flying Fox'
  return db.getProfile(99906, t.context.connection)
    .then(function (result) {
      var actual = result[0].name
      t.is(expected, actual)
    })
})

test('addUser adds a user', function (t) {
  var newAnimal = {
    name: "Lovely Lemur",
    email: "lemur@hotmail.com",
    snack: "Caterpillars",
    habitat: "Madagascar",
    image: "lemur.jpg",
    user_id: ""
  }

  var expected = 27
  return db.addUser(newAnimal, t.context.connection )
    .then(function (result) {
      var actual = result[0]
      t.is(actual, expected)
    })
})
