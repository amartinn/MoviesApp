import React,{useState,useContext} from 'react'
import styles from './comment.module.css'
import { MovieContext } from '../../context/movieState'
import { useParams } from 'react-router-dom'
import translate from '../../translations'

const Comment = () => {

    const { id } = useParams()
    const {comments,updateComment} = useContext(MovieContext)
    const exists = comments.find(({movieId}) => movieId ===id)
    const [comment,setComment] = useState(exists?.comment ?? '')
    const changeHandler = async (e) => {
        setComment(e.target.value)
        updateComment(id,e.target.value)
    }
    return (
    <textarea className={styles.textarea} value={comment} onChange={changeHandler} placeholder={translate('comment.placeholder')} rows="10" cols="80"></textarea>
    )
}

export default Comment