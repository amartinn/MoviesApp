import {
    SET_USER,
    GET_USER
} from '../actions/constants'
import {
    setUserId
} from '../utils/userHelper'

const initialState = ''
const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            setUserId(action.payload);
            return action.payload
        }
        case GET_USER: {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default user