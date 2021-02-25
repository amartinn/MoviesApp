import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styles from './search.module.css'
import { SearchBox } from '../../components'
import API from '../../utils/dataHelper'
import { Movie } from '../../components'
import { Container,Typography } from '@material-ui/core'
import { MovieContext } from '../../context/movieState'



const Search = () => {
    const { query } = useParams()
    const [movies, setMovies] = useState([])
    const {isMovieFavorite} = useContext(MovieContext)
    useEffect(() => {
        API.getMoviesByQuery(query)
            .then(data => {
                setMovies(data.results)
            })
    }, [query])
    return (
        <>
            <article className={styles['search-wrapper']}>
                <SearchBox />
            </article>
            <Container className={styles['movies-wrapper']}>                
                {movies.length !== 0 ?movies.map((movie) => {

                    return <Movie key={movie.id} isFavorite={isMovieFavorite(movie.id)} movie={movie}/>
                }) : <Typography variant='h3'>No Results found for:
                <span className={styles['error-word']}> {query}</span>
                </Typography>}
            </Container>
        </>
    )
}


export default Search