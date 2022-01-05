import {IPost} from './posts.entity'
import PostsRepository from './posts.repository'
import PostsModel from './posts.model'

class PostsDataAccess implements PostsRepository {
  async getAllPosts(): Promise<IPost[]> {
    return (await PostsModel.find()) as unknown as IPost[]
  }

  async getByName(name: string): Promise<IPost> {
    return (await PostsModel.findOne({name})) as unknown as IPost
  }

  async getByTag(tag: string): Promise<IPost[]> {
    return (await PostsModel.find({tags: tag})) as unknown as IPost[]
  }

  async createPost(post: IPost): Promise<IPost> {
    const newPost = new PostsModel(post)
    return await newPost.save()
  }
}

export default PostsDataAccess
