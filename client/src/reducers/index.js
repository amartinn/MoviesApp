import {combineReducers} from 'redux'
import movies from './movie'
const reducers = {
    movies: movies
}
const combined = combineReducers(reducers)
export default combined