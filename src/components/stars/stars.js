import React,{useState,useContext} from 'react'
import styles from './stars.module.css'
import ReactStars from "react-rating-stars-component";
import { Typography } from '@material-ui/core'
import { MovieContext } from '../../context/movieState'
import { useParams } from 'react-router-dom'

const Stars = () => {
    const { id } = useParams()
    const {ratings,updateRating} = useContext(MovieContext)
    const exists = ratings.find(({movieId}) => movieId === id)
    console.log(exists)
    const [rating,setRating] = useState(exists?.rating ?? 0)

    const ratingChanged = (newRating) => {
        setRating(newRating)
        updateRating(id,newRating)
    }

    return (
        <>
        <Typography variant="h4">Your Rating</Typography>
        <ReactStars className={styles.stars} value={rating} count={5} onChange={ratingChanged} size={50} activeColor="#ffd700"/>
        </>
    )
} 

export default Stars