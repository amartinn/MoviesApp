import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../utils/dataHelper'
import { Movie, Stars, Comment } from '../../components'
import styles from './movieDetails.module.css'
import { MovieContext } from '../../context/movieState'
const MovieDetails = _ => {
    const { id } = useParams()
    const {isMovieFavorite} = useContext(MovieContext)
    const [movie, setMovie] = useState({})
    const isFavorite = isMovieFavorite(id);
    useEffect(() => {
        API.getMovieById(id).then(data => {
            setMovie(data)
        })
    }, [id])
    return (
        <>
            <Movie movie={movie} isFavorite={isFavorite}></Movie>
            <article className={styles['review-section']}>
                <Stars />
                <Comment/>
            </article>
        </>
    )
}


export default MovieDetails