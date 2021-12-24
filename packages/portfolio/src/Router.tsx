import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Article from './components/Article'
import Home from './pages/Home'

export function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  )
}

export default AppRouter
