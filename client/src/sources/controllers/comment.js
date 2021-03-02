import {
    UPDATE_COMMENT,
    GET_COMMENTS,
    CREATE_COMMENT
} from '../links'
import HTTP from '../HTTP'
import * as userHelper from '../../utils/userHelper'
class Comment {
    updateComment(movieId, comment) {
        const body = {movieId,comment,userId:this.userId}
        return new Promise((resolve, reject) => {
           return HTTP.put(UPDATE_COMMENT,body).then(json => {
               resolve(json)
           })
        })
    }
    get userId(){
        return userHelper.getUserId()
    }
    createComment(movieId, comment) {
        const body = {movieId,comment,userId:this.userId}
        return new Promise((resolve, reject) => {
            return HTTP.post(CREATE_COMMENT,body).then(json => {
                resolve(json)
            })
         })
    }
    getAll(){
        return new Promise((resolve, reject) => {
            HTTP.get(GET_COMMENTS + `?userId=${this.userId}`).then(json => {
                resolve(json)
            })
        })
    }
}

export default Comment