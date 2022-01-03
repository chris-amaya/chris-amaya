import {Schema, model} from 'mongoose'
import {IProject} from '@personal/common'

const ProjectSchema = new Schema<IProject>({
  name: {
    type: String,
    required: true,
  },
  images: {
    home: {
      type: String,
      required: true,
    },
    hero: {
      type: String,
      required: true,
    },
  },
  link: {
    type: String,
  },
  github: {
    type: String,
  },
  caseStudy: {
    type: Boolean,
  },
  lang: {
    en: {
      name: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      summary: {
        type: String,
        required: true,
      },
    },
    es: {
      name: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      summary: {
        type: String,
        required: true,
      },
    },
  },
})

export default model<IProject>('Project', ProjectSchema)
