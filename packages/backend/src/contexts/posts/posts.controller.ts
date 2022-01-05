import {Request, Response} from 'express'
import PostsDataAccess from './posts.data-access'
import {PostUseCases} from './posts.use-cases'

const postUseCases = new PostUseCases(new PostsDataAccess())

async function getPostsController(req: Request, res: Response) {
  const posts = await postUseCases.getPosts()
  res.json({
    ok: true,
    posts,
  })
}

async function getPostByName(req: Request, res: Response) {
  const {name} = req.params
  const post = await postUseCases.getPost(name)
  res.json({
    ok: true,
    post,
  })
}

async function getPostsByTag(req: Request, res: Response) {
  const {tag} = req.params
  const posts = await postUseCases.getPostsByTag(tag)
  res.json({
    ok: true,
    posts,
  })
}

async function savePostController(req: Request, res: Response) {
  const {name, tags, date, lang} = req.body

  if (!name) {
    res.json({
      ok: false,
      error: 'name not provided',
    })
    return
  }

  if (!tags || !tags.length || tags.every((tag) => !tag)) {
    res.json({
      ok: false,
      error: 'tags not provided',
    })
    return
  }

  if (
    !date ||
    (date.length === 0 && typeof date === 'string') ||
    typeof date !== 'string'
  ) {
    res.json({
      ok: false,
      error: 'date not provided',
    })
    return
  }

  if (!lang) {
    res.json({
      ok: false,
      error: 'content not provided or incorrect',
    })
    return
  }

  if (typeof lang === 'object' && Object.keys(lang).length === 0) {
    res.json({
      ok: false,
      error: 'content not provided or incorrect',
    })
    return
  }

  if (
    Object.keys(lang).every(
      (key) => !lang[key].title || !lang[key].summary || !lang[key].text,
    )
  ) {
    res.json({
      ok: false,
      error: 'content not provided or incorrect',
    })
    return
  }

  const post = await postUseCases.savePost(req.body)
  res.json({
    ok: true,
    post,
  })
}

export {getPostsController, savePostController, getPostByName, getPostsByTag}
