import {
    combineReducers
} from 'redux'
import movies from './movie'
import comments from './comment'
import ratings from './rating'
import language from './language'
import user from './user'
const reducers = {
    movies,
    comments,
    ratings,
    language,
    user
}
const combined = combineReducers(reducers)
export default combined