const express = require('express');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const dispatcher = require('./dispatcher')
const routing = require('./routing');
const authRouter = require('./auth/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = app.listen(4000, onListen);
const io = socketIo.listen(server);

app.use(authRouter);

// const dispatch = dispatcher(io);
// const router = routing(dispatch, questions)
app.use(routing)

function onListen() {
  console.log('Listening on port 4000')
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  client.on(
    'disconnect',
    () => console.log('disconnect test:', client.id)
  )
}
);
