import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './i18n/config'

import './sass/main.scss'
import {Header, Hero, About, Projects} from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="hero">
          <div className="container">
            <Header />
            <Hero />
          </div>
        </div>

        <About />
        <Projects />
      </div>
    </BrowserRouter>
  )
}

export default App
