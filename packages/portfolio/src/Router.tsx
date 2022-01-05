import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Article from './pages/Article'
import Blog from './pages/Blog'
import Home from './pages/Home'

export function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project">
          <Route path=":id" element={<Article />}></Route>
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Article />} />
      </Routes>
    </div>
  )
}

export default AppRouter
