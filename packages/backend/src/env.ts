import {resolve} from 'path'
import {config} from 'dotenv'

const env = resolve(__dirname, '../.env')
config({path: env})

export const PORT = process.env.PORT
export const MONGO_DB_URL = process.env.MONGO_DB_URL
