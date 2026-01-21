const todosRouter = require('express').Router()

var todos = [
  {
    id: 1,
    content: 'Learn Docker',
  },
  {
    id: 2,
    content: 'Learn k8s',
  },
]

var nextId = 3

const getNextId = () => {
  return nextId++
}

todosRouter.get('/', async (_req, res) => {
  res.json(todos)
})

todosRouter.post('/', async (req, res) => {
  const body = req.body
  const newTodo = { id: getNextId(), content: body.content }
  todos.push(newTodo)
  res.json(newTodo)
})

module.exports = todosRouter
