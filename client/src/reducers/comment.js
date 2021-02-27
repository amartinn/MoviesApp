import {
    UPDATE_COMMENT
} from '../actions/constants'
const initialState = []

const comment = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT: {
            const currentComments = state
            const {
                movieId,
                comment
            } = action.payload
            const filteredComments = currentComments.filter(x => x.movieId !== movieId)
            filteredComments.push({
                movieId,
                comment
            })
            return [...filteredComments]

        }
        default: {
            return state
        }
    }
}

export default comment