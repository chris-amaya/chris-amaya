import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

export function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRouter
