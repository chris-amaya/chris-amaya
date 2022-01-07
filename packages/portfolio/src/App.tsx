import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'
import './i18n/config'
import './sass/main.scss'
import {AppState} from './context/AppContext'

function App() {
  return (
    <BrowserRouter>
      <AppState>
        <Router></Router>
      </AppState>
    </BrowserRouter>
  )
}

export default App
