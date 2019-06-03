module.exports = function dispatcher (io) {
  return function dispatch (payload) {
    const action = {
      type: 'QUESTIONS',
      payload
    }

    io.emit('action', action)
  }
}