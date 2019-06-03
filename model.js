const Sequelize = require('sequelize');
const sequelize = require('../db');

const questions = sequelize.define('questions', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    field: 'ID',
    primaryKey: true
  },
  category: {
    type: Sequelize.TEXT
  },
  question: {
    type: Sequelize.TEXT
  },
  level: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  answer_A: {
    type: Sequelize.TEXT
  },
  answer_B: {
    type: Sequelize.TEXT
  },
  answer_C: {
    type: Sequelize.TEXT
  },
  answer_D: {
    type: Sequelize.TEXT
  }
});

module.exports = questions;