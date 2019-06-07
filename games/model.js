const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game = sequelize.define('games', {
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'lobby'
  },
  name: {
    type: Sequelize.STRING
  },
  turnUserId: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false
})

module.exports = Game;