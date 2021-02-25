import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './appReducer'

const item = localStorage.getItem('_favorites')
const initialState = {
    favoriteMovies: item ? JSON.parse(item) : []
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('_favorites',JSON.stringify(state.favoriteMovies))
    })

    const addToFavorites = movie => {
        dispatch({ type: 'ADD_MOVIE_TO_FAVORITES', payload: movie })
    }
    const removeFromFavorites = movie => {
        dispatch({ type: 'REMOVE_MOVIE_FROM_FAVORITES', payload: movie })
    }
    return (
        <GlobalContext.Provider
         value={{ 
            favoriteMovies: state.favoriteMovies, 
            addToFavorites: addToFavorites, 
            removeFromFavorites: removeFromFavorites,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}