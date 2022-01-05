import {savePostController} from '../src/contexts/posts/posts.controller'
import {mockRequest, mockResponse} from './util/interceptor'

describe('Tests on post controller', () => {
  let req
  let res
  beforeAll(() => {
    req = mockRequest()
    res = mockResponse()
  })

  afterEach(() => {
    req.body = {}
    jest.clearAllMocks()
  })

  test('should response to be `name not provided`', async () => {
    req.body = {}
    await savePostController(req, res)

    req.body = {
      name: '',
    }

    await savePostController(req, res)

    expect(res.json.mock.calls[0][0].error).toMatch(/name not provided/)
    expect(res.json.mock.calls[1][0].error).toMatch(/name not provided/)
  })

  test('should reponse to be `tags not provided`', async () => {
    const post = {
      name: 'post 1',
    } as any
    req.body = post
    await savePostController(req, res)

    post.tags = ''
    await savePostController(req, res)

    post.tags = []
    await savePostController(req, res)

    post.tags = ['']
    await savePostController(req, res)

    expect(res.json.mock.calls[0][0].error).toMatch(/tags not provided/)
    expect(res.json.mock.calls[1][0].error).toMatch(/tags not provided/)
    expect(res.json.mock.calls[2][0].error).toMatch(/tags not provided/)
    expect(res.json.mock.calls[3][0].error).toMatch(/tags not provided/)
  })

  test('should response to be `date not provided`', async () => {
    const post = {
      name: 'post 1',
      tags: ['tag 1', 'tag 2'],
    } as any
    req.body = post
    await savePostController(req, res)

    post.date = ''
    await savePostController(req, res)

    post.date = new Date()
    await savePostController(req, res)

    expect(res.json.mock.calls[0][0].error).toMatch(/date not provided/)
    expect(res.json.mock.calls[1][0].error).toMatch(/date not provided/)
  })

  test('should response to be `content not provided or incorrect`', async () => {
    const post = {
      name: 'post 1',
      tags: ['tag 1', 'tag 2'],
      date: '2020-01-01',
    } as any
    req.body = post
    await savePostController(req, res)

    post.lang = ''
    await savePostController(req, res)

    post.lang = 'asdfasdf'
    await savePostController(req, res)

    expect(res.json.mock.calls[0][0].error).toMatch(
      /content not provided or incorrect/,
    )
    expect(res.json.mock.calls[1][0].error).toMatch(
      /content not provided or incorrect/,
    )
  })

  test('should response to be `content not provided or incorrect` 2', async () => {
    const post = {
      name: 'post 1',
      tags: ['tag 1', 'tag 2'],
      date: '2020-01-01',
      lang: {},
    } as any
    req.body = post
    await savePostController(req, res)

    req.body.lang = {
      en: {
        title: '',
        summary: '',
        text: '',
      },
    }

    await savePostController(req, res)
    req.body.lang = {
      en: {
        title: '',
        summary: '',
        text: '',
      },
      es: {
        title: '',
        summary: '',
        text: '',
      },
    }

    expect(res.json.mock.calls[0][0].error).toMatch(
      /content not provided or incorrect/,
    )

    expect(res.json.mock.calls[1][0].error).toMatch(
      /content not provided or incorrect/,
    )
  })
})
