import {getDate, IPost} from '@personal/common'
import {MongoTestHandler} from './db-handler'
import PostsDataAccess from '../src/contexts/posts/posts.data-access'
import {PostUseCases} from '../src/contexts/posts/posts.use-cases'

describe('Tests on Posts', () => {
  let postUseCases: PostUseCases
  const mongod = new MongoTestHandler()
  beforeAll(async () => {
    mongod.connect()
    postUseCases = new PostUseCases(new PostsDataAccess())
  })

  afterAll(async () => await mongod.closeDatabase())

  const post1: IPost = {
    name: 'test-post',
    lang: {
      en: {
        title: 'Test Post',
        summary: 'test summary',
        text: 'test text',
      },
      es: {
        title: 'Test Post 2',
        summary: 'test summary 2',
        text: 'test text 2',
      },
    },
    date: getDate(),
    tags: ['test'],
  }

  test('should create a post', async () => {
    const response = await postUseCases.savePost(post1)

    expect(response).toBeDefined()
    expect(response).toMatchObject(post1)
  })

  test('should return 1 item', async () => {
    const posts = await postUseCases.getPosts()

    expect(posts).toBeDefined()
    expect(posts).toHaveLength(1)
  })

  test('should return 1 item by its name', async () => {
    const newPostName = 'test-post-2'

    await postUseCases.savePost(
      Object.assign(post1, {
        name: newPostName,
      }),
    )

    const postData1 = await postUseCases.getPost(post1.name)
    expect(postData1.name).toBe(post1.name)

    const post2 = await postUseCases.getPost(newPostName)
    expect(post2.name).toBe(post2.name)
  })

  test('should return 2 posts by tag', async () => {
    const post2: IPost = {...post1, tags: ['tag-1', 'tag-2']}
    const post3: IPost = {...post1, tags: ['tag-1', 'tag-3']}
    const post4: IPost = {...post1, tags: ['tag-3', 'tag-4']}

    await postUseCases.savePost(post2)
    await postUseCases.savePost(post3)
    await postUseCases.savePost(post4)

    const getPosts = await postUseCases.getPostsByTag('tag-1')

    expect(getPosts).toBeDefined()
    expect(getPosts).toHaveLength(2)

    const _post2 = getPosts[0]
    const _post3 = getPosts[1]

    expect(_post2.name).toBe(post2.name)
    expect(_post3.name).toBe(post3.name)
  })
})
