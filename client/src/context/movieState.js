import React, { createContext, useReducer, useEffect } from 'react'
import MovieReducer from '../reducers/movieReducer'
import LS from '../utils/localStorageHelper'

const favoriteKey = '_favorites'
const commentsKey = '_comments'
const ratingsKey = '_ratings'
const initialState = {
    favoriteMovies: JSON.parse(LS.getItem(favoriteKey)) ?? [],
    comments : JSON.parse(LS.getItem(commentsKey)) ?? [],
    ratings : JSON.parse(LS.getItem(ratingsKey)) ?? [],
}


export const MovieContext = createContext(initialState)

export const MovieProvider = props => {
    const [state, dispatch] = useReducer(MovieReducer, initialState)
    useEffect(() => {
        LS.setItem(favoriteKey,JSON.stringify(state.favoriteMovies))
        LS.setItem(commentsKey,JSON.stringify(state.comments))
        LS.setItem(ratingsKey,JSON.stringify(state.ratings))
    })

    const addToFavorites = movie => {
        dispatch({ type: 'ADD_MOVIE_TO_FAVORITES', payload: movie })
    }
    const removeFromFavorites = movie => {
        dispatch({ type: 'REMOVE_MOVIE_FROM_FAVORITES', payload: movie })
    }

    const updateComment = (movieId,comment) => {
        dispatch({ type: 'UPDATE_COMMENT', payload: {movieId,comment} })
    }
    const updateRating = (movieId,rating) => {
        dispatch({ type: 'UPDATE_RATING',payload: {movieId,rating}})
    }
    const isMovieFavorite = movieId => (state.favoriteMovies.find(x => x.id === +movieId))
    return (
        <MovieContext.Provider
         value={{ 
            favoriteMovies: state.favoriteMovies, 
            comments: state.comments,
            ratings: state.ratings,
            addToFavorites: addToFavorites, 
            removeFromFavorites: removeFromFavorites,
            isMovieFavorite:isMovieFavorite,
            updateComment: updateComment,
            updateRating:updateRating
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}