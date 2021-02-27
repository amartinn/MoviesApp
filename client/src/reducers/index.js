import {combineReducers} from 'redux'
import movie from './movie'

const reducers = {
    movie,
}

const combined = combineReducers(reducers)

export default combined