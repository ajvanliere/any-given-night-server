const { Router } = require('express');
const Player = require('./model');
const User = require('../users/model');
const Game = require('../games/model');

const router = new Router();

router.post('/players', (req, res, next) => {
  const player = {
    //game_id: req.body.game_id,
    //user_id: req.body.user_id,
    board_location: 0
  }
  Player
    .create(player)
    .then(player => {
      if (!player) {
        return res.status(404).send({
          message: `Player does not exist`
        })
      }

      User
        .findByPk(req.body.user_id)
        .then(user => {
          player
            .setUser(user)
            .then(() => {
              Game
              .findByPk(req.body.game_id)
              .then(game => {

                player
                  .setGame(game)
                  .then(() => {
                    game
                      .addPlayer(player)
                      .then(() => {
                        return res.status(201).send(player)
                      })
                  })
              })
            })
        })
    })
    .catch(error => next(error))
})

router.get('/players', (req, res, next) => {
  Player
    .findAll({
      include: [{ model: User }],
      include: [{ model: Game }]
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