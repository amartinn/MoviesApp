const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE_TO_FAVORITES':
            return {
                ...state,
                favoriteMovies: [action.payload,...state.favoriteMovies],
            }
        case 'REMOVE_MOVIE_FROM_FAVORITES': {

            const index = state.favoriteMovies.indexOf(action.payload)
            state.favoriteMovies.splice(index, 1)
            return {
                ...state,
                favoriteMovies:[...state.favoriteMovies]
            }
        }
        default:
            return state
    }
}

export default reducer