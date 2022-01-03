import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {useParams} from 'react-router-dom'

import {IProject} from '@personal/common'
import {Header} from '../components'
import {useTranslation} from 'react-i18next'

interface state extends IProject {
  content: string
}

function Article() {
  const [state, setState] = useState<Partial<state>>()
  const {i18n} = useTranslation()
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:8000/project/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setState({...data.project, content: data.project.text[i18n.language]}),
      )
  }, [])

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      content: state?.text ? state.text[i18n.language] : '',
    }))
  }, [i18n.language])

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="hero-img">
        <img src={state?.image} alt="" />
      </div>
      <section>
        <div className="container">
          <ReactMarkdown
            children={state?.content || ''}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </section>
    </>
  )
}

export default Article
