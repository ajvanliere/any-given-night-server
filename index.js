const express = require('express')
const app =express()
const socketIo = require('socket.io')
const cors = require('cors')
const bodyParser = require('body-parser')
const Questions = require('./model')
const authRouter = require('./auth/routes');

app.use(cors())
app.use(bodyParser.json())

app.get('/questions', (req, res, next) => {
 
  Questions.findAll()
    .then(response => {
      if(!response){
        return response.status(404).send({
          message: `message does not exist`
        })
      }
      emitQuestions(response)
    })
})


function onListen(){
  
app.use(authRouter);

function onListen() {
  console.log('Listening on port 4000')
}
const server = app.listen(4000,onListen)
const io = socketIo.listen(server)

function emitQuestions() {
 
  Questions.findAll()
    .then(questions => {
      const action = {
        type: 'MESSAGES',
        payload: questions
      }
      io.emit('action', action)
    })
    .catch(err => console.log(err))
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