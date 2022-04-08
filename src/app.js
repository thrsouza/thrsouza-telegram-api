import { config } from 'dotenv-safe'
import express from 'express'
import cors from 'cors'

import router from './router.js'

class App {
  constructor() {
    config()
    this.express = express()
    this.cors()
    this.middlewares()
    this.routes()
  }

  cors() {
    this.express.use(cors({ origin: '*', methods: 'POST' }))
  }

  middlewares() {
    this.express.use(express.json())
  }

  routes() {
    this.express.use(router)
  }
}

export const app = new App().express
