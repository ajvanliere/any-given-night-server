const { Router } = require('express');
const router = new Router();
const { toJWT } = require('./jwt');
const { toData } = require('./jwt');
const bcrypt = require('bcrypt');
const User = require('../users/model');

router.get('/users', (request, response, next) => {
  User
    .findAll()
    .then(users => {
      response.send({ users })
    })
    .catch(error => next(error))
})

router.post('/users', (req, res) => {
  console.log('hello')
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }
  User
    .create(user)
    .then(x => {
      if (!x) {
        return res.status(404).send({
          message: `User does not exist`
        })
      }
      return res.status(201).send(x)
    })
    .catch(error => next(error))
})

router.get('/secret-endpoint', (req, res) => {
  const auth = req.headers.authorization && req.headers.authorization.split(' ')
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    try {
      const data = toData(auth[1])
      res.send({
        message: 'Thanks for visiting the secret endpoint.',
        data
      })
    }
    catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      })
    }
  }
  else {
    res.status(401).send({
      message: 'Please supply some valid credentials'
    })
  }
})

module.exports = router