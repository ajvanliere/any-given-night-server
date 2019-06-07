const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = require('../users/model');
const Game = require('../games/model');

const Player = sequelize.define('players', {
  board_location: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
})

Player.belongsTo(User)

Player.belongsTo(Game)
Game.hasMany(Player)

module.exports = Player;