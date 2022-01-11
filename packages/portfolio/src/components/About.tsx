import React from 'react'
import {Trans, useTranslation} from 'react-i18next'
import AnimatedText from '../animations/AnimatedText'

export function About() {
  const {t} = useTranslation()
  return (
    <AnimatedText>
      <section>
        <div className="container about" id="about">
          <div className="title">
            <h1>{t('about.title')}</h1>
          </div>
          <div className="about-me-content">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2.pre')}</p>
            <ul>
              <li>
                <Trans i18nKey={'about.p2.list.i1'}>
                  <strong>More than 30 small personal projects</strong>:
                  projects to enforce my knowledge while I was forming myself.
                </Trans>
              </li>
              <li>
                <Trans i18nKey={'about.p2.list.i2'}>
                  <strong>1 personal project</strong>:
                  <a href={'https://camport.chrisamaya.com.mx'}>Camport</a> is a
                  project that I hope some day soon will be consumed.
                </Trans>
              </li>
              <li>
                <Trans i18nKey={'about.p2.list.i3'}>
                  <strong>At least 3 big professional projects</strong>: while I
                  was working at Quickapps I help finishing 2 big projects and
                  one more left it on standby.
                </Trans>
              </li>
            </ul>
            <p>{t('about.p3')}</p>
            <ul>
              <li>
                <Trans i18nKey={'about.p4.list.i1'}>
                  <strong>Fluent</strong>: HTML, CSS, JavaScript, Typescript,
                  Vue, Node.js
                </Trans>
              </li>
              <li>
                <Trans i18nKey={'about.p4.list.i2'}>
                  <strong>Proficient</strong>: React, Angular, Linux, Docker,
                  MongoDB, MySQL, TDD/Jest, Git, Socket.io
                </Trans>
              </li>
              <li>
                <Trans i18nKey={'about.p4.list.i3'}>
                  <strong>Prior Experience</strong>: Zoho, Genexus, D3.js, React
                  Native
                </Trans>
              </li>
            </ul>
            <p>
              {t('about.p5.pre')}
              <Trans
                i18nKey={'about.p5.cert'}
                components={{
                  cert: (
                    <a
                      target={'_blank'}
                      href="https://www.efset.org/cert/hpStKw"></a>
                  ),
                }}
              />
              <Trans
                i18nKey={'about.p5.efset'}
                components={{
                  efset: (
                    <a target={'_blank'} href="https://www.efset.org/"></a>
                  ),
                }}
              />
            </p>
          </div>
        </div>
      </section>
    </AnimatedText>
  )
}

export default About
