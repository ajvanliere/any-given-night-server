const express = require('express');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const dispatcher = require('./dispatcher')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const server = app.listen(4000, onListen)
const io = socketIo.listen(server)

const dispatch = dispatcher(io)
// const router = routing(dispatch, questions)
// app.use(router)

function onListen () {
  console.log('Listening on port 4000')
}

io.on(
  'connection',
  client => {
    console.log('client.id test:', client.id)

    dispatch(messages)

    client.on(
      'disconnect',
      () => console.log('disconnect test:', client.id)
    )
  }
)
