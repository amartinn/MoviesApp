import React,{useState,useEffect} from 'react';
import {FavoriteMovie} from '../';
import styles from './favoriteMovieList.module.css'
import API from '../../utils/dataHelper'
import localStorageHelper from '../../utils/localStorageHelper'

import {Container} from '@material-ui/core'
const FavoriteMovieList = () => {  
     const [movies,setMovies] = useState([]);
     useEffect(() => {
          const movieIds = localStorageHelper.getFavoriteMovies()
          for(let id of movieIds){
               API.getMovieById(id)
               .then(data => {
                   setMovies(prev => [...prev,data]);
               })
          }
      }, [])
      console.log(movies)
    return (<>
    <h2>Your Favorites</h2>
   <Container className = {styles["favorite-movie-wrapper"]}>
        {movies.map(movie => 
               <FavoriteMovie key={movie.id} imageUrl={`https://image.tmdb.org/t/p/w500` + movie.poster_path}/>)
        }
   </Container>
   </>)
}

export default FavoriteMovieList