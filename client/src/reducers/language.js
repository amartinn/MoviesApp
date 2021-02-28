import {
    UPDATE_LANGUAGE
} from '../actions/constants'
import LS from '../utils/localStorageHelper'

const initialState = LS.getItem('_language') || 'en'


const language = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_LANGUAGE: {
            return action.payload

        }
        default: {
            return state
        }
    }
}



export default language