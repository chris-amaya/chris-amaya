import mongoose from 'mongoose'
import {MongoMemoryServer} from 'mongodb-memory-server'

export class MongoTestHandler {
  mongod: MongoMemoryServer
  mongoUri: string
  constructor() {
    this.mongod = new MongoMemoryServer()
  }

  async connect() {
    await this.mongod.start()
    await mongoose.connect(this.mongod.getUri())
  }

  async closeDatabase() {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await this.mongod.stop()
  }

  async clearDatabase() {
    const collections = mongoose.connection.collections

    for (const key in collections) {
      const collection = collections[key]
      await collection.drop()
    }
  }
}
