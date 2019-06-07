// const questions = require('./model');
// const { Router } = require('express');
// const router = new Router();

// router.get('/questions/:id', (req, res, next) => {
//     questions
//     .findByPk(req.params.id)
//     .then (question => { 
//       if (!question) {
//         return res.status(404).send({
//           message: 'Question does not exist (anymore)'
//         })
//       }
//       return res.send(question)
//     })
//     .catch(error => next(error))
//   })

// module.exports = function routing (dispatch, questions) {
//     const router = express.Router()
  
//     return router.get('/questions/:id', (request, response) => {
//       const { question } = request.body
  
//       console.log('question test:', question)
  
//       questions.push(question)
  
//       dispatch(questions)
  
//       response.status(201).send(question)
//     })
//   }

// module.exports = router;