import {
    ADD_MOVIE_TO_FAVORITES,
    REMOVE_MOVIE_FROM_FAVORITES
} from '../actions/constants'
const initialState = []

const movie = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
        case ADD_MOVIE_TO_FAVORITES: {
            return [...state, action.payload]
        }
        case REMOVE_MOVIE_FROM_FAVORITES: {
            return [...state.filter(x => x.id !== action.payload.id)]

        }
        default: {
            return state
        }
    }
}

export default movie