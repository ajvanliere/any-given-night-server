const { Router } = require('express');
const Answer = require('./model');
const router = new Router();

router.post('/answers', (req, res, next) => {
  const answer = {
    user_answer: req.body.user_answer,
    game_id: req.body.game_id,
    user_id: req.body.user_id,
    question_id: req.body.question_id
  }
  Answer
    .create(answer)
    .then(x => {
      if (!x) {
        return res.status(404).send({
          message: `Answer cannot be added`
        })
      }
      return res.status(201).send(x)
    })
    .catch(error => next(error))
})

module.exports = router;