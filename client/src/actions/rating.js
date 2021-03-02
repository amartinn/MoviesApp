import {
  CREATE_RATING,
  UPDATE_RATING,
  GET_RATINGS
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


export const createRating = (movieId, rating) => {
  return (dispatch) => {
    return APP.ratings.createRating(movieId, rating).then(json => {
      return dispatch({
        type: CREATE_RATING,
        payload: json
      })
    })
  }
}

export const getRatings = () => {
  return (dispatch) => {
    return APP.ratings.getAll().then(json => {
      return dispatch({
        type: GET_RATINGS,
        payload: json
      })
    })
  }
}