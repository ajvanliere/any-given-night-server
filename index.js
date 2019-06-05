
const express = require('express');
const app =express();
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const Questions = require('./model');
const authRouter = require('./auth/routes');
const usersRouter = require('./users/routes');

app.use(cors());
app.use(bodyParser.json());
app.use(authRouter);
app.use(usersRouter);

app.get('/questions', (req, res, next) => {
  Questions
    .findAll()
    .then(questions => {
      emitQuestions(questions)
      res.status(200).send(questions)
    })
    .catch(console.error)
  })

const server = app.listen(4000,onListen)
const io = socketIo.listen(server)

function onListen(){
  console.log('Listening on port 4000')
}

function emitQuestions(questions) {
        console.log('QUESTIONS', questions)
   
        const action = {
          type: 'QUESTIONS',
          payload: questions
        }
        io.emit('action', action)
  }

// when socketset connects, it calls this function
// it calls this function everytime a seperate person connects to it
io.on('connection', client => {
  // client here is huge object
  // I don't know where it comes from
  // but it has an id

  console.log('client.id.test:', client.id)
  // console.log(client)
  // 
  emitQuestions()

  client.on('disconnect', () => console.log('disconnect test', client.id))
})