const crypto = require('crypto')
const fs = require('node:fs/promises')
require('dotenv').config()

const FILE_PATH = process.env.FILE_PATH
if (!FILE_PATH) {
  throw new Error('FILE_PATH environment variable must be present!')
}

const uuid = crypto.randomUUID()

const status = () => {
  const now = new Date()
  return now.toISOString() + ': ' + uuid
}

const interval = setInterval(async () => {
  try {
    await fs.writeFile(FILE_PATH, status())
  } catch (err) {
    console.error(err)
  }
}, 5000)
