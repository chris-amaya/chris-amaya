import {Router} from 'express'
import {
  getPostByName,
  getPostsByTag,
  getPostsController,
  savePostController,
} from './posts.controller'

const router = Router()

router.get('/posts', getPostsController)
router.get('/post/:name', getPostByName)
router.get('/post/tag/:tag', getPostsByTag)
router.post('/post', savePostController)

export default router
