import {
    UPDATE_RATING
} from './constants'
import APP from '../sources'

export const updateRating = (movieId, rating) => {
    return dispatch => {
        return APP.ratings.updateRating(movieId, rating).then(json => {
            return dispatch({
                type: UPDATE_RATING,
                payload: json
            })
        })
    }
}