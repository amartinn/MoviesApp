import { createStore } from 'redux'
import reducers from '../reducers'


const reduxStore = (initialState = {}) => {
    const store = createStore(reducers,initialState)

    return store
}

export default reduxStore