declare module '*.png' {
  const value: any
  export = value
}

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.less' {
  const classes: {[key: string]: string}
  export default classes
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
declare module '*.module.scss' {
  const classes: {[key: string]: string}
  export default classes
}

// declare module '*.module.scss' {
//   const content: Record<string, string>
//   export * from content
// }

// declare module '*.module.scss' {
//   const styles2: {[classname: string]: string}
//   export * from styles2
// }

// declare module '*.module.css' {
//   const styles: { [className: string]: string }
//   export * from styles
// }
