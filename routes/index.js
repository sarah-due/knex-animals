var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/view_animal/:id', function (req, res) {
  console.log('You found the');
  db.getProfile(req.params.id, req.app.get('connection'))
    .then(function (profile) {
      console.log(profile);
      res.render('view_animal', profile[0])
    })
})

router.get('/admin', function (req, res) {
  res.render('admin')
})

router.post('/admin', (req, res) => {
  db.addUser(req.body, req.app.get('connection'))
  .then(function(result) {
    res.redirect('/')
  })
})



module.exports = router
