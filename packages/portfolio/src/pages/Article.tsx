import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {useParams} from 'react-router-dom'
import {IProject} from '@personal/common'

import projects from '../assets/projects.json'
import {Header} from '../components'
import {useTranslation} from 'react-i18next'
import {useAppContext} from '../context/AppContext'
import AnimatedPage from '../animations/AnimatedPage'

function Article() {
  const [state, setState] = useState<IProject>()
  const {i18n} = useTranslation()
  const {id} = useParams()

  const {setLoading} = useAppContext()

  useEffect(() => {
    setLoading(true)
    setState(projects.find((project) => project.name === id))
  }, [id])

  return (
    <div className="Article">
      <div className="container">
        <Header />
      </div>
      <AnimatedPage>
        <div className="hero-img">
          <img
            src={state?.images.hero}
            onLoad={() => setLoading(false)}
            alt=""
          />
        </div>
        <section>
          <div className="container">
            <ReactMarkdown
              children={state?.lang[i18n.language].text || ''}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </section>
      </AnimatedPage>
    </div>
  )
}

export default Article
