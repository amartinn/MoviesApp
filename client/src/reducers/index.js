import {
    combineReducers
} from 'redux'
import movies from './movie'
import comments from './comment'
import ratings from './rating'
import language from './language'
const reducers = {
    movies,
    comments,
    ratings,
    language
}
const combined = combineReducers(reducers)
export default combined