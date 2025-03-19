
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import deTranslation from './locales/de.json';
import esTranslation from './locales/es.json';
import plTranslation from './locales/pl.json';
import roTranslation from './locales/ro.json';
import czTranslation from './locales/cz.json';
import frTranslation from './locales/fr.json';

const resources = {
  en: {
    translation: enTranslation
  },
  de: {
    translation: deTranslation
  },
  es: {
    translation: esTranslation
  },
  pl: {
    translation: plTranslation
  },
  ro: {
    translation: roTranslation
  },
  cz: {
    translation: czTranslation
  },
  fr: {
    translation: frTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
