const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = require('../users/model');
const Game = require('../games/model');

const Player = sequelize.define('players', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    field: 'ID',
    primaryKey: true
  },
  game_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  board_location: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
})

Player.belongsTo(User,{
  "foreignKey": "user_id"
})

Player.belongsTo(Game,{
  "foreignKey": "game_id"
})

module.exports = Player;