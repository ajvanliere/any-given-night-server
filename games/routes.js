const { Router } = require('express');
const Game = require('./model');
const Player = require('../players/model')

const router = new Router();

router.post('/games', (req, res, next) => {
  const game = {
    name: req.body.name
  }
  Game
    .create(game)
    .then(game => {
      if (!game) {
        return res.status(404).send({
          message: `Game does not exist`
        })
      }
      return res.status(201).send(game)
    })
    .catch(error => next(error))
})

router.get('/games', (req, res, next) => {
  console.log('get /games test!')
  Game
    .findAll({ include: [Player] })
    .then(games => {
      console.log('games test:', games)
      res.status(200).send(games)
    })
    .catch(console.error)
  })

  router.get('/games/:id', (req, res, next) => {
    Game
    .findByPk(req.params.id)
    .then (game => { 
      if (!game) {
        return res.status(404).send({
          message: 'game does not exist (anymore)'
        })
      }
      return res.send(game)
    })
    .catch(error => next(error))
})

module.exports = router;