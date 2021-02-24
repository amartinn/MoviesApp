import React from 'react'
import styles from './movie.module.css'
import genres from '../../utils/genreHelper'
import localStorageHelper from '../../utils/localStorageHelper'
import { Typography, Chip,Button, } from '@material-ui/core'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
const DEFAULT_IMAGE_URL = 'https://www.personaltrainermarylebone.com/wp-content/uploads/2015/04/200x300.gif';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            title : props.title,
            poster_path : props.poster_path == null ? DEFAULT_IMAGE_URL : `${IMAGE_URL}${props.poster_path}`,
            genre_ids : props.genre_ids,
            id : props.id,
            overview : props.overview === '' ? 'No overview found...`' : props.overview,
            release_year : props.release_date.split('-')[0],
            isFavorite : localStorageHelper.isFavorite(props.id),
            buttonText : localStorageHelper.isFavorite(props.id) === true ? 'Remove From Favorites' : 'Add To Favorites',
            buttonClass : localStorageHelper.isFavorite(props.id) === true ? 'red' : 'green'
        }
    }
    handleClick = e => {
        let {isFavorite,id} = this.state
        if(isFavorite){
            localStorageHelper.removeFromFavorites(id)
            isFavorite = false
        }
        else{
            localStorageHelper.addToFavorites(id)
            isFavorite = true
        }
        this.setState({isFavorite})
        this.state.buttonText = isFavorite  === true ? 'Remove From Favorites' : 'Add To Favorites'
        this.state.buttonClass = isFavorite === true ? 'red' : 'green'
        
    }

    getGenreText = genreValue => {
        const data = genres.filter(genre => genre.id === genreValue)[0];
        return data.name;
    }
    render() {  
        return (
            <article className={styles["movie-outer-wrapper"]} >
             <article className={styles["movie-wrapper-image"]}>
                 <img width="200" height="300" src={this.state.poster_path} alt={this.state.title}></img>
             </article>
             <article className={styles["movie-wrapper"]}>
                 <Typography variant="h4" className={styles["movie-title"]}>{this.state.title} ({this.state.release_year})</Typography>
                 <article className={styles["movie-genre-wrapper"]}>
                     {this.state.genre_ids.map(genre => {
                         return <Chip className={styles["movie-genre"]} key={genre} label={this.getGenreText(genre)} ></Chip>
                     })}
                 </article>
                 <Typography>{this.state.overview}</Typography>

                 <Button className={`${styles['favorite-btn']} ${styles[this.state.buttonClass]}`} onClick={this.handleClick}>{this.state.buttonText}</Button>
             </article>
         </article>
        )
    }
}
export default Movie;