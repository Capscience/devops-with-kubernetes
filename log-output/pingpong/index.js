const fs = require('node:fs/promises')
const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const PORT = process.env.PORT
const PINGPONG_PATH = process.env.PINGPONG_PATH
if (!PORT || !PINGPONG_PATH) {
  throw new Error('PORT and PINGPONG_PATH environment variables must be present!')
}

const initPingpongFile = async () => {
  await fs.writeFile(PINGPONG_PATH, '0')
}
initPingpongFile()

const app = express()
app.use(express.json())
app.use(morgan('tiny'))

app.get('/pingpong', async (_req, res) => {
  try {
    var pingpongData = await fs.readFile(PINGPONG_PATH, { encoding: 'utf8' })
    res.send(`Pong ${pingpongData++}`)
    await fs.writeFile(PINGPONG_PATH, pingpongData.toString())
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.get('/pings', async (_req, res) => {
  try {
    const pingpongData = await fs.readFile(PINGPONG_PATH, { encoding: 'utf8' })
    res.json({ pings: pingpongData })
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
