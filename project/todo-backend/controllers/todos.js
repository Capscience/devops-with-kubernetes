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
  const body = req.body
  if (body.content.length > 140) {
    return res.status(400).json({ error: "Content too long" })
  }
  try {
    const newTodo = await Todo.create(req.body)
    return res.status(201).json(newTodo)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ error })
  }
})

todosRouter.put('/:id', async (req, res) => {
  const body = req.body
  const todo = await Todo.findByPk(req.params.id)
  if (todo) {
    todo.done = body.done
    await todo.save()
    res.json(todo)
  } else {
    res.status(404).end()
  }
})

module.exports = todosRouter
