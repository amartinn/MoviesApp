import {
    UPDATE_COMMENT,
    CREATE_COMMENT,
    GET_COMMENTS
} from '../actions/constants'
const initialState = []

const comment = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT: {
            const {
                movieId,
            } = action.payload
            const filteredComments = state.filter(x => x.movieId !== movieId)
            filteredComments.push(action.payload)
            return [...filteredComments]

        }
        case CREATE_COMMENT: {
            return [action.payload]
        }
        case GET_COMMENTS: {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default comment