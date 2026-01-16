const fs = require('node:fs/promises')
const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT
const FILE_PATH = process.env.FILE_PATH
if (!PORT || !FILE_PATH) {
  throw new Error('PORT and FILE_PATH environment variables must be present!')
}

const app = express()

app.get('/', async (_req, res) => {
  try {
    const data = await fs.readFile(FILE_PATH, { encoding: 'utf8' })
    res.send(data)
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
