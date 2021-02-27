import {
    ADD_MOVIE_TO_FAVORITES,
    REMOVE_MOVIE_FROM_FAVORITES
} from '../actions/constants'


const reducer = (state = {}, action) => {
    
    switch (action.type){
        case ADD_MOVIE_TO_FAVORITES:{
            return {
                ...state,
                favoriteMovies:[...state.favoriteMovies,action.payload]
            }
        }
        case REMOVE_MOVIE_FROM_FAVORITES:{
            return {
                ...state,
                favoriteMovies:[...state.favoriteMovies.filter(movie => movie.id !== action.payload.movieId)]
            }
        }

        default:{
            return state
        }
    }
}

export default reducer