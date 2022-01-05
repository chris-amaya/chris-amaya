import {IPost} from './posts.entity'
import PostsRepository from './posts.repository'

export class PostUseCases {
  constructor(private postRepository: PostsRepository) {}

  async getPosts(): Promise<IPost[]> {
    return await this.postRepository.getAllPosts()
  }

  async getPost(id: string) {
    return await this.postRepository.getByName(id)
  }

  async getPostsByTag(tag: string) {
    return await this.postRepository.getByTag(tag)
  }

  async savePost(post: IPost) {
    return await this.postRepository.createPost(post)
  }
}
