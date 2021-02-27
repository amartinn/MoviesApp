import {
    UPDATE_RATING
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
        default: {
            return state
        }
    }
}

export default rating