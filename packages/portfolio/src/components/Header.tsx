import React from 'react'
import {useTranslation} from 'react-i18next'
import {FaSun, FaMoon} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import {Translate} from '../assets'
import useTheme from '../hooks/useTheme'

export function Header() {
  const {handleTheme, isActive} = useTheme()
  const {t, i18n} = useTranslation()

  function handleLanguagte(lang: 'en' | 'es') {
    i18n.changeLanguage(lang)
  }
  return (
    <header>
      <ul>
        {/* <li>
          <Link to="/">{t('header.home')}</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li> */}
        <li>
          <div className="languages-container">
            <Translate />
            <ul className="languages-selector">
              <li onClick={() => handleLanguagte('es')}>Spanish</li>
              <li onClick={() => handleLanguagte('en')}>English</li>
            </ul>
          </div>
        </li>
        <li>
          <button
            className={`switch ${isActive ? 'active' : ''}`}
            id="switch"
            onClick={handleTheme}>
            <span>
              <FaSun />
            </span>
            <span>
              <FaMoon />
            </span>
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header
