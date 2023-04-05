import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import {useLocation} from 'react-router-dom'

import Article from './pages/Article'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Loader from './components/Loader'

export function AppRouter() {
  const location = useLocation()

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="project">
            <Route path=":id" element={<Article />}></Route>
          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Article />} />
        </Routes>
      </AnimatePresence>
      <Loader />
    </div>
  )
}

export default AppRouter
