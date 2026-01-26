const todosRouter = require('express').Router()
const Todo = require('../models/Todo')

todosRouter.get('/', async (_req, res) => {
  try {
    const todos = await Todo.findAll()
    return res.json(todos)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
})

todosRouter.post('/', async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body)
    return res.json(newTodo)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ error })
  }
})

module.exports = todosRouter
