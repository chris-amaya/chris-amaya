import {Schema, model} from 'mongoose'
import {IPost} from './posts.entity'

const PostSchema = new Schema<IPost>({
  name: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  lang: {
    en: {
      title: {
        type: String,
        required: true,
      },
      summary: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
    es: {
      title: {
        type: String,
        required: true,
      },
      summary: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  },
})

export default model<IPost>('Project', PostSchema)
