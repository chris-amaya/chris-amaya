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
          <Button text="CV" />
        </div>
        <div className="social-media">
          <LinkedIn />
          <Codepen />
          <Github />
          <Figma />
          <Codewars />
          <Email />
        </div>
      </div>
    </div>
  )
}

export default Hero
