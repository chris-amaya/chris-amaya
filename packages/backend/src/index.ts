import './env'
import App from './App'

const app = new App(Number(process.env.PORT))
app.start(() => {
  console.log(`Server Running on ${app.port}`)
})
