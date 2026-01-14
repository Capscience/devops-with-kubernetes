const express = require('express')

const app = express()

app.use(express.json())

app.get('/', async (_req, res) => {
  res.json({ "status": "ok" })
})

module.exports = app
