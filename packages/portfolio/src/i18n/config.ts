import i18n from 'i18next'
import transEn from './en.json'
import transEs from './es.json'
import {initReactI18next} from 'react-i18next'

export const resources = {
  en: {
    translation: transEn,
  },
  es: {
    translation: transEs,
  },
} as const

i18n.use(initReactI18next).init({
  lng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
})
