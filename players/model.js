const Sequelize = require('sequelize')
const sequelize = require('../db')

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

// Player.hasMany(User);
// User.belongsTo(Player);

module.exports = Player;