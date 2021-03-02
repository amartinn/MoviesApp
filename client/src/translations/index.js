import langs from './languages'
import LS from '../utils/localStorageHelper'
const translate = (key, placeholders) => {
  const lang = LS.getItem('_language') ?? 'en'
  let translation = langs[lang][key] || ''

  translation = translation.replace('{0}', placeholders)

  return translation
}

export default translate