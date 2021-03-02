import {
    ADD_MOVIE_TO_FAVORITES,
    REMOVE_MOVIE_FROM_FAVORITES,
    GET_FAVORITE_MOVIES
} from '../actions/constants'
const initialState = []

const movie = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE_TO_FAVORITES: {
            return [...action.payload]
        }
        case REMOVE_MOVIE_FROM_FAVORITES: {
            return [...action.payload]
        }
        case GET_FAVORITE_MOVIES: {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default movie