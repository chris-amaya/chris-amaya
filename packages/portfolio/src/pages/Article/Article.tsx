import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {useParams} from 'react-router-dom'

import {IProject} from '@personal/common'
import {Header} from '../../components'
import {useTranslation} from 'react-i18next'

function Article() {
  const [state, setState] = useState<IProject>()
  const {i18n} = useTranslation()
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:8000/project/${id}`)
      .then((res) => res.json())
      .then((data) => setState(data.project as IProject))
  }, [])

  return (
    <div className="Article">
      <div className="container">
        <Header />
      </div>
      <div className="hero-img">
        <img src={state?.images.hero} alt="" />
      </div>
      <section>
        <div className="container">
          <ReactMarkdown
            children={state?.lang[i18n.language].text || ''}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </section>
    </div>
  )
}

export default Article
