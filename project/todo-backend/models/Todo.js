const { DataTypes, Model } = require('sequelize')
const db = require('../db')

class Todo extends Model { }

Todo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'todo',
})

Todo.sync()

module.exports = Todo
