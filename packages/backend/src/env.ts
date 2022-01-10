import {resolve} from 'path'
import {config} from 'dotenv'

// "dev": "nodemon -r dotenv/config src/index.ts dotenv_config_path=.env.development",

const envDev = resolve(__dirname, '../.env.development')
const envProd = resolve(__dirname, '../.env.production')

switch (process.env.NODE_ENV) {
  case 'development':
    config({path: envDev})
    break
  case 'production':
    config({path: envProd})
    break
  default:
    config({path: envDev})
}

export const PORT = process.env.PORT
export const MONGO_DB_URL = process.env.MONGO_DB_URL
