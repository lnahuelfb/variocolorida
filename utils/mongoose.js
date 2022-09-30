import { connect, connection } from 'mongoose'
require('dotenv').config()

const conn = {
  isConnected: false
}

export const dbConnect = async () => {
  if (conn.isConnected) return

  const db = await connect(process.env.MONGODB_URI)

  conn.isConnected = db.connections[0].readyState

  console.log(db.connection.db.databaseName)
}

connection.on('connected', () => {
  console.log('Mongo DB is connected')
})

connection.on('error', (err) => console.log('error'))