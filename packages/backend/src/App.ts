import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import http from 'http'

import projectRoutes from './contexts/projects/projects.routes'

export default class App {
  public app: express.Application
  public port: number
  public httpServer: http.Server

  constructor(port: number) {
    this.port = port
    this.app = express()
    this.httpServer = http.createServer(this.app)
    this.middlewares()
    this.connect()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use('/', projectRoutes)
  }

  async connect() {
    console.log('Connecting to MongoDB...')

    try {
      await mongoose.connect('mongodb://127.0.0.1:27017')
      console.log('DB Connected')
    } catch (error) {
      console.log(error)
      throw new Error('Error en la base de datos')
    }
  }

  disconnect() {
    mongoose.disconnect()
  }

  start(callback: () => void) {
    this.httpServer.listen(this.port, () => callback())
  }
}
