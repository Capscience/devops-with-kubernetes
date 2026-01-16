const crypto = require('crypto')
const fs = require('node:fs/promises')
require('dotenv').config()

const LOG_PATH = process.env.LOG_PATH
if (!LOG_PATH) {
  throw new Error('LOG_PATH environment variable must be present!')
}

const uuid = crypto.randomUUID()

const status = () => {
  const now = new Date()
  return now.toISOString() + ': ' + uuid
}

const interval = setInterval(async () => {
  try {
    await fs.writeFile(LOG_PATH, status())
  } catch (err) {
    console.error(err)
  }
}, 5000)
