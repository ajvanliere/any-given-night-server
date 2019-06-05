const { Router } = require('express');
const Player = require('./model');

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

module.exports = router;