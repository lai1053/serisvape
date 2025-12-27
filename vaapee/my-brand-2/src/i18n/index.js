import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import en from './locales/en.json'
import es from './locales/es.json'
import it from './locales/it.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import sv from './locales/sv.json'
import el from './locales/el.json'
import et from './locales/et.json'
import lv from './locales/lv.json'
import lt from './locales/lt.json'
import pl from './locales/pl.json'
import ro from './locales/ro.json'
import hu from './locales/hu.json'
import sk from './locales/sk.json'
import ru from './locales/ru.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('vapanda_lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    zh,
    en,
    es,
    it,
    fr,
    de,
    sv,
    el,
    et,
    lv,
    lt,
    pl,
    ro,
    hu,
    sk,
    ru
  }
})

export default i18n



