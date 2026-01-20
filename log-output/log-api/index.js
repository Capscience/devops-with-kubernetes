const fs = require('node:fs/promises')
const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const PORT = process.env.PORT
const LOG_PATH = process.env.LOG_PATH
const PINGS_ENDPOINT = process.env.PINGS_ENDPOINT
if (!PORT || !LOG_PATH || !PINGS_ENDPOINT) {
  throw new Error('PORT, LOG_PATH and PINGS_ENDPOINT environment variables must be present!')
}

const app = express()
app.use(morgan('tiny'))

app.get('/', async (_req, res) => {
  try {
    const logData = await fs.readFile(LOG_PATH, { encoding: 'utf8' })
    const response = await fetch(PINGS_ENDPOINT)
    const data = await response.json()
    res.send(`${logData}<br/>Ping / Pongs: ${data.pings}`)
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
