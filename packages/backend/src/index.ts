import './env'
import App from './App'

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')

const app = new App(Number(process.env.PORT))
app.start(() => {
  console.log(`Server Running on ${app.port}`)
})
