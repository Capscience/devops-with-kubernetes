const express = require('express')
const morgan = require('morgan')
const todosRouter = require('./controllers/todos')
const db = require('./db')

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

app.get('/healthz', async (_req, res) => {
  try {
    await db.authenticate()
    return res.status(200).end()
  } catch (err) {
    console.error(err)
    return res.status(503).end()
  }
})

module.exports = app
