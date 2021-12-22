import React from 'react'
import {Header, Hero, About, Projects} from '../components'

export function Home() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Header />
          <Hero />
        </div>
      </div>

      <About />
      <Projects />
    </>
  )
}

export default Home
