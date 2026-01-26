const fs = require('node:fs/promises')
const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const PORT = process.env.PORT
const LOG_PATH = process.env.LOG_PATH
const PINGS_ENDPOINT = process.env.PINGS_ENDPOINT
const MESSAGE = process.env.MESSAGE
const INFO_PATH = process.env.INFO_PATH

if (!PORT || !LOG_PATH || !PINGS_ENDPOINT || !MESSAGE || !INFO_PATH) {
  throw new Error('PORT, LOG_PATH and PINGS_ENDPOINT environment variables must be present!')
}

const app = express()
app.use(morgan('tiny'))

app.get('/healthz', async (_req, res) => {
  try {
    const response = await fetch(PINGS_ENDPOINT)
    console.log(response.status)
    return res.status(response.status).end()
  } catch (err) {
    console.error(err)
    return res.status(503).end()
  }
})

app.get('/', async (_req, res) => {
  try {
    const infoData = await fs.readFile(INFO_PATH, { encoding: 'utf8' })
    const logData = await fs.readFile(LOG_PATH, { encoding: 'utf8' })
    const response = await fetch(PINGS_ENDPOINT)
    const data = await response.json()
    res.send(
      `file content: ${infoData}<br>
env variable: MESSAGE=${MESSAGE}<br>
${logData}<br>
Ping / Pongs: ${data.pings}`
    )
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
