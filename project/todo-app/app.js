import fs from 'node:fs/promises'
import express from 'express'
import morgan from 'morgan'
import process from 'node:process'

const IMAGE_PATH = process.env.IMAGE_PATH
const IMAGE_URL = process.env.IMAGE_URL
const IMAGE_TTL_SECONDS = process.env.IMAGE_TTL_SECONDS

const app = express()

app.use(express.static('dist'))

app.use(morgan('tiny'))


const newImage = async () => {
  const image = await fetch(IMAGE_URL)
  await fs.writeFile(IMAGE_PATH, image.body)
}

if (!IMAGE_PATH || !IMAGE_URL || !IMAGE_TTL_SECONDS) {
  throw new Error('Environment variables IMAGE_PATH, IMAGE_URL and IMAGE_TTL_SECONDS must be present!')
} else {
  // Intentionally crashes if writing the image to cache file fails
  newImage()
}


app.get('/hourly-image', async (_req, res) => {
  try {
    const statOutput = await fs.stat(IMAGE_PATH)
    const now = new Date()
    console.log('Image age:', (now - statOutput.mtime) / 60_000, 'minutes')
    if (now - statOutput.mtime > IMAGE_TTL_SECONDS * 1000) {
      console.log('Getting new image, still returning the previous one')
      newImage()
    } else {
      console.log('Serving from cache')
    }
  } finally {
    res.sendFile(IMAGE_PATH)
  }
})

export default app
