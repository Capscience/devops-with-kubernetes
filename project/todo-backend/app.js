const express = require('express')
const morgan = require('morgan')
const todosRouter = require('./controllers/todos')

const app = express()
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/todos', todosRouter)

module.exports = app
