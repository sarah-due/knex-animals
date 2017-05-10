var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var createServer = require('../server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('GET /', (t) => {
  return request(t.context.app)
    .get('/')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      t.is($('li').first().text(), "Ambitious Aardvark (aardvark@example.org) ")
    })

})

test('GET /view_animal/:id', (t) => {
  return request(t.context.app)
  .get('/view_animal/99907')
  .expect(200)
  .then((res) => {
    t.true(res.text.indexOf("Gila") > -1)
    t.is(res.text.indexOf("Baboon"), -1)
  })
})
