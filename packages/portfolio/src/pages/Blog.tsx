import React from 'react'
import {Header, Tags} from '../components'
import {Posts} from '../components'
export default function Blog() {
  return (
    <div className="Blog">
      <div className="container">
        <Header />
        <Tags />
        <Posts />
      </div>
    </div>
  )
}
