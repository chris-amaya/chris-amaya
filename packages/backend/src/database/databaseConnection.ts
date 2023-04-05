import mongoose from 'mongoose'

export interface IDatabaseConnection {
  connect(): Promise<void>
  disconnect(): Promise<void>
}

export class DatabaseConnection implements IDatabaseConnection {
  async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_DB_URL as string)
      console.log('DB Connected')
    } catch (error) {
      console.log(error)
      throw new Error('Failed to connect to the database: ' + error)
    }
  }
  async disconnect(): Promise<void> {
    try {
      await mongoose.connection.close()
      console.log('DB Disconnected')
    } catch (error) {
      console.log(error)
      throw new Error('Error on the disconnection with the DB' + error)
    }
  }
}
