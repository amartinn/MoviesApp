import React from 'react';
import styles from './stars.module.css'
import ReactStars from "react-rating-stars-component";
import { Typography } from '@material-ui/core'
const Stars = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    }

    return (
        <>
        <Typography variant="h4">Your Rating</Typography>
        <ReactStars className={styles.stars} count={5} onChange={ratingChanged} size={50} activeColor="#ffd700"/>
        </>
    )
} 

export default Stars