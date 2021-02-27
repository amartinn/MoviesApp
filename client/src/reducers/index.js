import {combineReducers} from 'redux'
import movies from './movie'
import comments from './comment'
const reducers = {
    movies,
    comments
}
const combined = combineReducers(reducers)
export default combined