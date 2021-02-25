const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE_TO_FAVORITES':
            return {
                ...state,
                favoriteMovies: [action.payload,...state.favoriteMovies],
            }
        case 'REMOVE_MOVIE_FROM_FAVORITES': {
            return {
                ...state,
                favoriteMovies:[...state.favoriteMovies.filter(x => x.id !== action.payload.id)]
            }
        }
        case 'UPDATE_COMMENT': {
            const {movieId} = action.payload
            const {comments} = state
            const exists = state.comments.find(x => x.movieId === movieId)
            
            if(exists) {
                const index = comments.indexOf(exists)
                comments.splice(index,1)
            }
            comments.push(action.payload)
            return {
                ...state,
                comments:[...comments]
            }
        }
        case 'UPDATE_RATING': {
            const {movieId} = action.payload
            const {ratings} = state
            const exists = ratings.find(x => x.movieId === movieId)
           
            if(exists) {
                const index = ratings.indexOf(exists)
                ratings.splice(index,1)
            }
            ratings.push(action.payload)
            return {
                ...state,
                ratings:[...ratings]
            }
        }
        default:
            return state
    }
}

export default reducer