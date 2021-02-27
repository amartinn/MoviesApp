import React,{useState,useContext} from 'react'
import styles from './stars.module.css'
import ReactStars from "react-rating-stars-component";
import { Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import translate from '../../translations'
const Stars = () => {
    const { id } = useParams()
    const [rating,setRating] = useState(0)

    const ratingChanged = (newRating) => {
        setRating(newRating)
    }

    return (
        <>
        <Typography variant="h4">{translate('rating.text')}</Typography>
        <ReactStars className={styles.stars} value={rating} count={5} onChange={ratingChanged} size={50} activeColor="#ffd700"/>
        </>
    )
} 

export default Stars