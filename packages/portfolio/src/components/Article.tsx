import React from 'react'
import ReactMarkdown from 'react-markdown'

import {Header} from '.'

function Article() {
  const markdown = `

  # This is a header

  ## This is a sub header
  341234123433333 333424243 asdfasdf
  faosdijfa s

  ![alt text](http://via.placeholder.com/350x150)

  `

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="hero-img">
        <img src="https://via.placeholder.com/1200x800" alt="" />
      </div>
      <section>
        <div className="container">
          <ReactMarkdown children={markdown} />
        </div>
      </section>
    </>
  )
}

export default Article
