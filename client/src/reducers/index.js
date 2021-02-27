import {combineReducers} from 'redux'
import movies from './movie'
import comments from './comment'
import ratings from './rating'
const reducers = {
    movies,
    comments,
    ratings
}
const combined = combineReducers(reducers)
export default combined