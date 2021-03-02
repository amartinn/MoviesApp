import {
    UPDATE_RATING,
    GET_RATINGS,
    CREATE_RATING,
} from '../links'

import HTTP from '../HTTP'
import * as userHelper from '../../utils/userHelper'
class Rating {

    constructor(){
        this.updateRating=this.updateRating.bind(this)
        this.createRating = this.createRating.bind(this)
        this.getAll = this.getAll.bind(this)
    }
    get userId(){
        return userHelper.getUserId()
    }
    updateRating(movieId, rating) {
        const body = {movieId,rating,userId:this.userId}
        return new Promise((resolve, reject) => {
           return HTTP.put(UPDATE_RATING, body).then(json => {
               resolve(json)
           })
        })
    }
    createRating(movieId, rating) {
        const body = {movieId,rating,userId:this.userId}
        return new Promise((resolve, reject) => {
            return HTTP.post(CREATE_RATING, body).then(json => {
                resolve(json)
            })
         })
    }
    getAll(){
        return new Promise((resolve, reject) => {
            HTTP.get(GET_RATINGS + `?userId=${this.userId}`).then(json => {
                resolve(json)
            })
        })
    }
}

export default Rating