import {Router} from 'express'
import {
  getProjectController,
  getProjectsController,
} from './projects.controller'

const router = Router()
router.get('/project/:name', getProjectController)
router.get('/projects', getProjectsController)

export default router
