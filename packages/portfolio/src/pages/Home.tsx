import React from 'react'
import {Header, Hero, About, Projects} from '../components'
import AnimatedPage from '../animations/AnimatedPage'

export function Home() {
  return (
    <div className="Home">
      <div className="hero">
        <div className="container">
          <div>
            <Header />
            <AnimatedPage>
              <Hero />
            </AnimatedPage>
          </div>
        </div>

        <AnimatedPage>
          <About />
          <Projects />
        </AnimatedPage>
      </div>
    </div>
  )
}

export default Home
