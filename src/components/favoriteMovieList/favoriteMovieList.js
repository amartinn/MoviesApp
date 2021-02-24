import React from 'react';
import {FavoriteMovie} from '../';
import styles from './favoriteMovieList.module.css'

import {Container} from '@material-ui/core'
const FavoriteMovieList = () => (
    <>
    <h2>Your Favorites</h2>
   <Container className = {styles["favorite-movie-wrapper"]}>
        <FavoriteMovie imageUrl="http://placehold.it/200x400"/>
        <FavoriteMovie imageUrl="http://placehold.it/200x400"/>
        <FavoriteMovie imageUrl="http://placehold.it/200x400"/>
        <FavoriteMovie imageUrl="http://placehold.it/200x400"/>
        <FavoriteMovie imageUrl="http://placehold.it/200x400"/>
   </Container>\
   </>
)

export default FavoriteMovieList