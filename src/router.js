import { Router } from 'express'

import MoviesController from './controllers/MessageController.js'

const routes = Router()

routes.post('/api/message', MoviesController.store)

export default routes
