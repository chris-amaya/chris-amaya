import React from 'react'
import {useTranslation} from 'react-i18next'

import {Codepen, Github, LinkedIn, Figma, Codewars, Email} from '../assets'
import {Button} from '.'

export function Hero() {
  const {t} = useTranslation()
  return (
    <div className="hero-content">
      <div className="content">
        <div className="presentation">
          <p>
            {t('hero.title.name')} <b>{t('hero.title.name_value')} </b>
            {t('hero.title.subtitle')}
          </p>
        </div>
        <div className="call-to-action">
          <a href="/Christian_Amaya-Developer.pdf">
            <Button text="CV" />
          </a>
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/christian-amaya/">
            <LinkedIn />
          </a>
          <a href="https://codepen.io/shadow_2">
            <Codepen />
          </a>
          <a href="https://github.com/chris-amaya/">
            <Github />
          </a>
          <a href="https://www.figma.com/@chrisamaya">
            <Figma />
          </a>
          <a href="https://www.codewars.com/users/chris-amaya">
            <Codewars />
          </a>
          <a href="mailto:contact@chrisamaya.com.mx">
            <Email />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
