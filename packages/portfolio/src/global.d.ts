declare module '*.png' {
  const value: any
  export = value
}

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.module.less' {
  const classes: {[key: string]: string}
  export default classes
}
