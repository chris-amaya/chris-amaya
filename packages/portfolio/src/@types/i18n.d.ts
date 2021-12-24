import 'react-i18next'
import {resources} from '../src/i18n/config'

declare module 'react-i18next' {
  type DefaultResources = typeof resources['en']

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Resources extends DefaultResources {
    translation: typeof import('../i18n/en.json')
  }
}
