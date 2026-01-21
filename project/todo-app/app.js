import fs from 'node:fs/promises'
import path from 'node:path'
import express from 'express'
import morgan from 'morgan'
import process from 'node:process'

const IMAGE_DIR = process.env.IMAGE_DIR

const app = express()

app.use(express.static('dist'))

app.use(morgan('tiny'))


const newImage = async () => {
  const image = await fetch('https://picsum.photos/1200')
  await fs.writeFile(`${IMAGE_DIR}/hourly-image.jpg`, image.body)
}

if (!IMAGE_DIR) {
  throw new Error('IMAGE_DIR environment variable must be present!')
} else {
  // Intentionally crashes if writing the image to cache file fails
  newImage()
}

const IMAGE_TTL = 10 /* minutes */ * 60 /* seconds in minute */ * 1000 /* milliseconds in second */

app.get('/hourly-image', async (_req, res) => {
  try {
    const statOutput = await fs.stat(`${IMAGE_DIR}/hourly-image.jpg`)
    const now = new Date()
    console.log('Image age:', (now - statOutput.mtime) / 60_000, 'minutes')
    if (now - statOutput.mtime > IMAGE_TTL) {
      console.log('Getting new image, still returning the previous one')
      newImage()
    } else {
      console.log('Serving from cache')
    }
  } finally {
    res.sendFile(path.join(IMAGE_DIR, 'hourly-image.jpg'))
  }
})

export default app
