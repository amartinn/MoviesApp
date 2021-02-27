import {ADD_MOVIE_TO_FAVORITES, REMOVE_MOVIE_FROM_FAVORITES} from './constants'
import APP from '../sources'

export const addToFavorites = (movie) => {
    console.log(movie)
    return dispatch => {
        return APP.movies.addToFavorites(movie).then(json => {
            return dispatch({
                type: ADD_MOVIE_TO_FAVORITES,
                payload: json.movies
            })
        })
    }

}
export const removeFromFavorites = (movie) => {
    return {
        type: REMOVE_MOVIE_FROM_FAVORITES,
        payload: movie
    }
}