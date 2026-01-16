const fs = require('node:fs/promises')
const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT
const LOG_PATH = process.env.LOG_PATH
const PINGPONG_PATH = process.env.PINGPONG_PATH
if (!PORT || !LOG_PATH || !PINGPONG_PATH) {
  throw new Error('PORT, LOG_PATH and PINGPONG_PATH environment variables must be present!')
}

const app = express()

app.get('/', async (_req, res) => {
  try {
    const logData = await fs.readFile(LOG_PATH, { encoding: 'utf8' })
    const pingpongData = await fs.readFile(PINGPONG_PATH, { encoding: 'utf8' })
    res.send(`${logData}<br/>Ping / Pongs: ${pingpongData}`)
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
