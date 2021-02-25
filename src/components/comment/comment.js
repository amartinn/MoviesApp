import React,{useState} from 'react'
import styles from './comment.module.css'

const Comment = () => {

    const [comment,setComment] = useState('')
    const changeHandler = (e) => {
        setComment(e.target.value)
    }
    return (
    <textarea className={styles.textarea} value={comment} onChange={changeHandler} placeholder="Your private notes and comments about the movie" rows="10" cols="80"></textarea>
    )
}

export default Comment