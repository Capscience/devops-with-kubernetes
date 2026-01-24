const express = require('express')
const morgan = require('morgan')
const { Sequelize, Model, DataTypes } = require('sequelize')

require('dotenv').config()
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
if (!PORT || !DB_URL) {
  throw new Error('PORT and DB_URL environment variables must be present!')
}

const sequelize = new Sequelize(process.env.DB_URL)
class PingPong extends Model { }

PingPong.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'pingpong',
})
PingPong.sync()

const app = express()
app.use(express.json())
app.use(morgan('tiny'))

app.get('/pingpong', async (_req, res) => {
  try {
    await PingPong.create()
    const pings = await PingPong.count()
    res.send(`Pong ${pings}`)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
})

app.get('/pings', async (_req, res) => {
  try {
    const pingpongData = await PingPong.count()
    res.json({ pings: pingpongData })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
