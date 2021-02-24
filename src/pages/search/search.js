import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './search.module.css'
import { SearchBox } from '../../components'
import API from '../../utils/dataHelper'
import { Movie } from '../../components'
import { Container } from '@material-ui/core'
const Search = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        API.getMoviesByQuery(query)
            .then(data => {
                setMovies(data.results);
            })
    }, [query])
    return (
        <>
            <article className={styles["search-wrapper"]}>
                <SearchBox />
            </article>
            <Container>
                {movies.map((movie) => {
                    return <Movie key={movie.id} {...movie}/>
                })}
            </Container>
        </>
    )
}


export default Search