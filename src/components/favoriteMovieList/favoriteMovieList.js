import React,{useContext} from 'react'
import {FavoriteMovie} from '../'
import styles from './favoriteMovieList.module.css'

import { MovieContext } from '../../context/movieState'
import {Container} from '@material-ui/core'
const FavoriteMovieList = () => {  
     const {favoriteMovies} =  useContext(MovieContext)
    return (favoriteMovies.length >0 ? <>
    <h2>Your Favorites</h2>
   <Container className = {styles['favorite-movie-wrapper']}>
        {favoriteMovies && favoriteMovies.map(movie => 
               {
                    return (<FavoriteMovie key={movie.id}  movie={movie}/>)
               }
        )}
   </Container>
   </>: <></>) 
}

export default FavoriteMovieList