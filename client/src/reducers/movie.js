import {ADD_MOVIE_TO_FAVORITES, REMOVE_MOVIE_FROM_FAVORITES} from '../actions/constants'
const initialState ={
    movies: []
}

const movie = (state = initialState,action) => {

    switch(action.type){
        case ADD_MOVIE_TO_FAVORITES:{
            return {
                ...state,
                movies:[...state.movies,action.payload]
            }
            
        }
        case REMOVE_MOVIE_FROM_FAVORITES: {
            return {
                ...state,
                movies:[...state.movies.filter(x => x.id !== action.payload.id)]
            }
        }
        default:{
            return state
        }
    }
}

export default movie