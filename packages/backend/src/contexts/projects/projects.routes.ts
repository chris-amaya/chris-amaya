import {Router} from 'express'
import {
  getProjectController,
  getProjectsController,
  saveProjectController,
} from './projects.controller'

const router = Router()
router.get('/project/:name', getProjectController)
router.get('/projects', getProjectsController)
router.post('/project', saveProjectController)

export default router
