import React from 'react'
import { Card } from '@material-ui/core'
import styles from './favoriteMovie.module.css'
import { Link } from 'react-router-dom'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
const DEFAULT_IMAGE_URL = 'https://www.personaltrainermarylebone.com/wp-content/uploads/2015/04/200x300.gif'


const FavoriteMovie = ({ movie }) => {
    const posterURl = movie.poster_path === null ? DEFAULT_IMAGE_URL : IMAGE_URL + movie.poster_path

    return (<Link to={`/movies/${movie.id}`} params={movie} >
        <Card className={styles['favorite-movie']}>
            <img src={posterURl} alt='movie' width='100' height='150'></img>
        </Card>
    </Link>)
}

export default FavoriteMovie