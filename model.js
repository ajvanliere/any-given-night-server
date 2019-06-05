const Sequelize = require('sequelize');
const sequelize = require('./db');

const Questions = sequelize.define('questions', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    field: 'ID',
    primaryKey: true
  },
  category: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  question: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  level: {
    type: Sequelize.TEXT
  },
  answer_A: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  answer_B: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  answer_C: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  answer_D: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  correct_answer: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Questions;