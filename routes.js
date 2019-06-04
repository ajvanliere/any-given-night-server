const express = require('express');
const questions = require('./model');
const { Router } = require('express');
const router = new Router();

router.get('/question/:id', (req, res, next) => {
    questions
    .findByPk(req.params.id)
    .then (question => { 
      if (!question) {
        return res.status(404).send({
          message: 'Question does not exist (anymore)'
        })
      }
      return res.send(question)
    })
    .catch(error => next(error))
  })

// module.exports = function routes (dispatch, questions) {
//   const router = express.Router()
// console.log('hello')
//   return router.get('/question', (request, response) => {
//     const { question } = request.body

//     console.log('question test:', question)

//     questions.push(question)

//     dispatch(questions)

//     response.status(201).send(question)
//   })
// }

module.exports = router;