import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './search.module.css'
import { SearchBox,MovieList } from '../../components'
import API from '../../utils/dataHelper'

const SearchPage = () => {
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
            <MovieList movies={movies}/>
        </>
    )
}


export default SearchPage