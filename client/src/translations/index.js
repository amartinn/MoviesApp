import langs from './languages'
import LS from '../utils/localStorageHelper'
const translate = (key) => {
  const lang = LS.getItem('_language') || 'en'
  let translation = langs[lang][key] || ''

  return translation
}

 export default translate;
