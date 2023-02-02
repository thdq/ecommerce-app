import ptBR from '@app/locales/pt-BR.json'
import enUS from '@app/locales/en-US.json'
import { locale } from 'expo-localization'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    'pt-BR': {
      translation: ptBR,
    },
    'en-US': {
      translation: enUS,
    },
  },
  lng: locale,
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
})

export { i18n }
