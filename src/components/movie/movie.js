import React,{useContext,useState,useEffect} from 'react'
import { GlobalContext } from '../../context/globalState'
import styles from './movie.module.css'
import genres from '../../utils/genreHelper'
import { Typography, Chip, Button } from '@material-ui/core'
import CONSTANTS from '../../utils/globalConstants'
const Movie = ({ movie,haveLink }) => {

    const {DEFAULT_IMAGE_URL,IMAGE_URL} = CONSTANTS
    const {addToFavorites,removeFromFavorites,favoriteMovies} =  useContext(GlobalContext)
    const contains = favoriteMovies.find(x=> x.id === movie.id)
    const [isFavorite,setFavorite] = useState(contains)
    const [buttonText,setButtonText] = useState('')
    const [buttonClass,setButtonClass] = useState('')

    const posterURL = movie.poster_path === null ? DEFAULT_IMAGE_URL : IMAGE_URL + movie.poster_path


    useEffect(() => {
        if(isFavorite){
            setButtonText('Remove From Favorites')
            setButtonClass('red')
        }
        else{
            setButtonText('Add To Favorites')
            setButtonClass('green')
        }
    },[isFavorite])

    const clickHandler = () => {
        if(isFavorite){ 
            removeFromFavorites(movie)
        }
        else{
            addToFavorites(movie)
        }
        
        setFavorite(!isFavorite)
    }
    const getGenreText = genreValue => {
        const data = genres.filter(genre => genre.id === genreValue)[0]
        return data.name
    }
    return (
        <article className={styles['movie-outer-wrapper']} >
            <article className={styles['movie-wrapper-image']}>
                <img width='200' height='300' src={posterURL} alt={movie.title}></img>
            </article>
            <article className={styles['movie-wrapper']}>
                <Typography variant='h4' className={styles['movie-title']}>{movie.title} ({movie.release_date && movie.release_date.split('-')[0]})</Typography>
                <article className={styles['movie-genre-wrapper']}>
                    {movie.genre_ids && movie.genre_ids.map(genre => {
                        return <Chip className={styles['movie-genre']} key={genre} label={getGenreText(genre)} ></Chip>
                    })}
                </article>
                <Typography>{movie.overview && movie.overview.substring(0,250)}</Typography>

                <Button className={`${styles['favorite-btn']} ${styles[buttonClass]}`} onClick={clickHandler}>{buttonText}</Button>
            </article>
        </article>
    )
}
export default Movie