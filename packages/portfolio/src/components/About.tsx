import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

export function About() {
  const {t} = useTranslation()
  return (
    <section>
      <div className="container" id="about">
        <div className="title">
          <h1>{t('about.title')}</h1>
        </div>
        <div className="about-me-content">
          <p>
            <Trans
              i18nKey="about.text"
              components={{
                cert: (
                  <a
                    target={'_blank'}
                    href="https://www.efset.org/cert/hpStKw"></a>
                ),
                efset: <a target={'_blank'} href="https://www.efset.org/"></a>,
              }}
            />
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
