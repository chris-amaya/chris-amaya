import React from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

import {Button} from '.'
import {Github, Link as LinkIcon} from '../assets'

export function Projects() {
  const {t} = useTranslation()
  const navigate = useNavigate()

  function handleNavigateProject(project: 'rock' | 'math' | 'camport') {
    navigate(`/projects/${project}`)
  }
  return (
    <section id="projects">
      <div className="title">
        <h1>{t('projects.title')}</h1>
      </div>

      <div className="cards">
        <div className="card">
          <div className="container">
            <div className="card-content">
              <div className="card-text">
                <div className="title">
                  <h2>Rock, Paper, Scissors</h2>
                </div>
                <div className="card-info">
                  <p>{t('projects.rock-paper')}</p>
                  <div className="card-buttons">
                    <Button
                      className="button"
                      onClick={() => handleNavigateProject('rock')}>
                      <p>Ver</p>
                    </Button>
                    <Button className="button">
                      <LinkIcon />
                    </Button>
                    <Button className="button">
                      <Github />
                    </Button>
                  </div>
                </div>
              </div>
              <figure className="card-img">
                <img src="/img/rock-paper-scissors.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <div className="card-content">
              <div className="card-text">
                <div className="title">
                  <h2>Camport</h2>
                </div>
                <div className="card-info">
                  <p>{t('projects.comport')}</p>
                  <div className="card-buttons">
                    <Button text="Ver" className="button" />
                    <Button className="button">
                      <LinkIcon />
                    </Button>
                    <Button className="button">
                      <Github />
                    </Button>
                  </div>
                </div>
              </div>
              <figure className="card-img">
                <img src="/img/camport.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <div className="card-content">
              <div className="card-text">
                <div className="title">
                  <h2>Math Fights</h2>
                </div>
                <div className="card-info">
                  <p>{t('projects.math-fights')}</p>
                  <div className="card-buttons">
                    <Button text="Ver" className="button" />
                    <Button className="button">
                      <LinkIcon />
                    </Button>
                    <Button className="button">
                      <Github />
                    </Button>
                  </div>
                </div>
              </div>
              <figure className="card-img">
                <img src="/img/math-fights.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
