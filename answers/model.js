const Sequelize = require('sequelize')
const sequelize = require('../db')

const Answers = sequelize.define('answers', {
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
  question_id: {
    type: Sequelize.INTEGER
  },
  user_answer: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
})

module.exports = Answers;