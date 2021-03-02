import {
    SET_USER,
    GET_USER
} from './constants'
import APP from '../sources'
import LS from '../utils/localStorageHelper'

export const setUser = () => {
    return dispatch => {
        return APP.user.setUser().then(json => {
            return dispatch({
                type: SET_USER,
                payload: json
            })
        })
    }
}
export const getUser = () => {
    return dispatch => {
        return dispatch({
            type: GET_USER,
            payload: LS.getItem('_userId')
        })
    }
}