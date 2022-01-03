import React from 'react'
import {Routes, Route, useMatch} from 'react-router-dom'
import Article from './pages/Article'
import Home from './pages/Home'

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
