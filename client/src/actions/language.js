import {
    UPDATE_LANGUAGE
} from './constants'
import LS from '../utils/localStorageHelper'
export const updateLanguage = (language) => {
    return dispatch => {
        // if language is changed, the page reloads so the new language is applied
        if (isLanguageChanged) {
            LS.setItem('_language', language)
         //    window.location.reload()
        }

        return dispatch({
            type: UPDATE_LANGUAGE,
            payload: language
        })
    }
}

const isLanguageChanged = (lang) => (
    LS.getItem('_language') === lang
)