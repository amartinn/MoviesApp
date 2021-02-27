import React,{useState,useContext} from 'react'
import styles from './comment.module.css'
import { useParams } from 'react-router-dom'
import translate from '../../translations'

const Comment = () => {

    const { id } = useParams()
    const [comment,setComment] = useState('')
    const changeHandler = async (e) => {
        setComment(e.target.value)
    }
    return (
    <textarea className={styles.textarea} value={comment} onChange={changeHandler} placeholder={translate('comment.placeholder')} rows="10" cols="80"></textarea>
    )
}

export default Comment