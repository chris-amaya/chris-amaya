import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {IProject} from '@personal/common'

import {Button} from '.'
import projects from '../assets/projects.json'
import {Github, Link as LinkIcon} from '../assets'
import {useAppContext} from '../context/AppContext'

export function Projects() {
  const {t, i18n} = useTranslation()
  const navigate = useNavigate()
  const [state, setState] = useState<IProject[]>(projects)

  function handleNavigateProject(projectName: string) {
    navigate(`/project/${projectName}`)
  }

  const {setLoading} = useAppContext()

  return (
    <section id="projects">
      <div className="title">
        <h1>{t('projects.title')}</h1>
      </div>

      <div className="cards">
        {state &&
          state.map((project) => (
            <div className="card" key={project?._id}>
              <div className="container">
                <div className="card-content">
                  <div className="card-text">
                    <div className="title">
                      <h2>{project.lang[i18n.language].name}</h2>
                      <p>{project.lang[i18n.language].summary}</p>
                    </div>
                    <div className="card-buttons">
                      {project.caseStudy && (
                        <Button
                          className="button"
                          onClick={() => handleNavigateProject(project.name)}>
                          <p>{t('projects.useCase')}</p>
                        </Button>
                      )}

                      {project.link && (
                        <Button className="button">
                          <a href={project.link}>
                            <LinkIcon />
                          </a>
                        </Button>
                      )}

                      {project.github && (
                        <Button className="button">
                          <a href={project.github}>
                            <Github />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <figure className="card-img">
                    <img
                      src={project.images.home}
                      onLoad={() => setLoading(false)}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Projects
