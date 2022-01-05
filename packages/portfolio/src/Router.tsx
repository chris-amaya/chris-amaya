import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Article from './pages/Article/Article'
import Home from './pages/Home/Home'

export function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project">
          <Route path=":id" element={<Article />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default AppRouter
