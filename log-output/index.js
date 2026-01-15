const crypto = require('crypto')
const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT

const uuid = crypto.randomUUID()

const status = () => {
  const now = new Date()
  return now.toISOString() + ': ' + uuid
}

const interval = setInterval(() => {
  console.log(status())
}, 5000)

const app = express()

app.use(express.json())

app.get('/', async (_req, res) => {
  res.send(status())
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
