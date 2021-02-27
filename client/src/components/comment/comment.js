import React,{useState} from 'react'
import styles from './comment.module.css'
import { useParams } from 'react-router-dom'
import translate from '../../translations'
import * as ACTIONS from '../../actions/comment'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
const Comment = (props) => {
    console.log(props)
    const { id } = useParams()
    const {updateComment} = props.actions
    const {comments} = props
    const commentObj = comments.find(x => x.movieId === id)
    const [comment,setComment] = useState(commentObj?.comment ?? '')
    const changeHandler = async (e) => {
        setComment(e.target.value);
        updateComment(id,e.target.value)
    }
    return (
    <textarea className={styles.textarea} value={comment} onChange={changeHandler} placeholder={translate('comment.placeholder')} rows="10" cols="80"></textarea>
    )
}


const mapStateToProps = state => {
    return {
         comments: state.comments.comments
    }
}

const mapDispatchToProps = dispatch => {
    const actions = ACTIONS
    const actionMap = { actions: bindActionCreators(actions, dispatch) }
    return actionMap
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment)