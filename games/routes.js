const { Router } = require('express');
const Game = require('./model');

const router = new Router();

router.post('/games', (req, res, next) => {
  const game = {
    name: req.body.name,
    status: "lobby"
  }
  Game
    .create(game)
    .then(x => {
      if (!x) {
        return res.status(404).send({
          message: `Game does not exist`
        })
      }
      return res.status(201).send(x)
    })
    .catch(error => next(error))
})

router.get('/games', (req, res, next) => {
  Game
    .findAll()
    .then(games => {
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