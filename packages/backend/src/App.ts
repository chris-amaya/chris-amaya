import express from 'express'
import cors from 'cors'
import http from 'http'

import projectRoutes from './contexts/projects/projects.routes'
import {IDatabaseConnection} from './database/databaseConnection'

export default class App {
  public app: express.Application
  public port: number
  public httpServer: http.Server
  private db: IDatabaseConnection

  constructor(port: number, db: IDatabaseConnection) {
    this.port = port
    this.db = db
    this.app = express()
    this.httpServer = http.createServer(this.app)
    this.middlewares()

    this.db.connect()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(projectRoutes)
  }

  start(callback: () => void) {
    this.httpServer.listen(this.port, () => callback())
  }
}
