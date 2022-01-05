interface language {
  [key: string]: {
    title: string
    summary: string
    text: string
  }
}

export interface IPost {
  name: string
  lang: language
  tags: string[]
  date: string
}
