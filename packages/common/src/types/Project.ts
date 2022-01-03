interface language {
  [key: string]: {
    name: string
    summary: string
    text: string
  }
}

export interface IProject {
  name: string
  lang: language
  caseStudy: boolean
  link: string
  github: string
  images: {
    home: string
    hero: string
  }
}
