import './env'
import App from './App'
import {DatabaseConnection} from './database/databaseConnection'

const app = new App(Number(process.env.PORT), new DatabaseConnection())

app.start(() => {
  console.log(`Server Running on ${app.port}`)
})
