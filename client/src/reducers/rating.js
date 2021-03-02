import {
    UPDATE_RATING,
    CREATE_RATING,
    GET_RATINGS
} from '../actions/constants'
const initialState = []

const rating = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_RATING: {
            const currentRatings = state
            const {
                movieId,
                rating
            } = action.payload
            const filteredRatings = currentRatings.filter(x => x.movieId !== movieId)
            filteredRatings.push({
                movieId,
                rating
            })
            return [...filteredRatings]
        }
        case CREATE_RATING: {
            return [...state, action.payload]
        }
        case GET_RATINGS: {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default rating