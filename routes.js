const express = require('express')
const { Router } = require('express');

module.exports = function routes (dispatch, questions) {
  const router = express.Router()

  return router.get('/question', (request, response) => {
    const { question } = request.body

    console.log('question test:', question)

    questions.push(question)

    dispatch(questions)

    response.status(201).send(question)
  })
}