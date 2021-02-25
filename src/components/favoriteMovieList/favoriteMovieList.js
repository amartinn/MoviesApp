import React,{useContext} from 'react'
import {FavoriteMovie} from '../'
import styles from './favoriteMovieList.module.css'
import { GlobalContext } from '../../context/globalState'
import {Container} from '@material-ui/core'
const FavoriteMovieList = () => {  
     const {favoriteMovies} =  useContext(GlobalContext)
     console.log(favoriteMovies)
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