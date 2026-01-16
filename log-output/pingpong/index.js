const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT

var requestCount = 0

const app = express()

app.use(express.json())

app.get('/pingpong', async (_req, res) => {
  res.send(`pong ${requestCount++}`)
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
