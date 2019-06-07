const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game = sequelize.define('games', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    field: 'ID',
    primaryKey: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
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