import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'
import './i18n/config'
import './sass/main.scss'

function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  )
}

export default App
