const fs = require('node:fs/promises')
const express = require('express')
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

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
