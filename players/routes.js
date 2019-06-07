const { Router } = require('express');
const Player = require('./model');
const User = require('../users/model');
const Game = require('../games/model');

const router = new Router();

router.post('/players', (req, res, next) => {
  const player = {
    game_id: req.body.game_id,
    user_id: req.body.user_id,
    board_location: 0
  }
  Player
    .create(player)
    .then(x => {
      if (!x) {
        return res.status(404).send({
          message: `Player does not exist`
        })
      }
      return res.status(201).send(x)
    })
    .catch(error => next(error))
})

router.get('/players', (req, res, next) => {
  Player
    .findAll({
      // include: [{ model: User, attributes: ['user_id'] }],
      // include: [{ model: Game, attributes: ['game_id'] }]
    })
    .then(players => {
      res.status(200).send(players)
    })
    .catch(console.error)
})

router.get('/players/:id', (req, res, next) => {
  Player
    .findByPk(req.params.id)
    .then(player => {
      if (!player) {
        return res.status(404).send({
          message: 'player does not exist (anymore)'
        })
      }
      return res.send(player)
    })
    .catch(error => next(error))
})

module.exports = router;