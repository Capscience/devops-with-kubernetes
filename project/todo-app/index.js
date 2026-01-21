import process from 'node:process'
import app from './app.js'

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
