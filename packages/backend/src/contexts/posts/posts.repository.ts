import {IPost} from './posts.entity'

interface PostsRepository {
  getAllPosts(): Promise<IPost[]>
  getByName(name: string): Promise<IPost>
  getByTag(tag: string): Promise<IPost[]>
  createPost(post: IPost): Promise<IPost>
}

export default PostsRepository
