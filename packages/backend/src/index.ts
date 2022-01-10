import * as dotenv from 'dotenv'
import App from './App'

dotenv.config()

const app = new App(Number(process.env.PORT))
app.start(() => {
  console.log(`Server Running on ${app.port}`)
})
