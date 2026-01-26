const express = require('express')
const morgan = require('morgan')
const todosRouter = require('./controllers/todos')

const app = express()
app.use(express.json())

morgan.token('post_data', (req) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  } else {
    return ''
  }
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post_data'))

app.use('/api/todos', todosRouter)

module.exports = app
