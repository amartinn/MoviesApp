import React from 'react';
import {Card} from '@material-ui/core'
import styles from './favoriteMovie.module.css'
const FavoriteMovie = ({imageUrl}) => (
<Card className={styles["favorite-movie"]}>
    <img src={imageUrl} width="100" height="150"></img>
</Card>
)

export default FavoriteMovie