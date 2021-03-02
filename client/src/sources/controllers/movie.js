import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    GET_FAVORITE_MOVIES
} from '../links'
import HTTP from '../HTTP'
import * as userHelper from '../../utils/userHelper'
class Movie {
    constructor(){
        this.addToFavorites = this.addToFavorites.bind(this)
        this.getAll = this.getAll.bind(this)
    }
    addToFavorites(movieId) {
        const body = {
            movieId,
            userId: this.userId
        }
        return new Promise((resolve, reject) => {
            HTTP.post(ADD_TO_FAVORITES,body).then(json => {
                resolve(json)
            })
        })
    }
    get userId(){
        return userHelper.getUserId()
    }
    removeFromFavorites(movie) {
        const body = {
            movieId:movie,
            userId:this.userId
        }
        return new Promise((resolve, reject) => {
            HTTP.delete(REMOVE_FROM_FAVORITES,body).then(json =>{
                resolve(json)
            })
        })
    }
    getAll(){
        return new Promise((resolve, reject) => {
            HTTP.get(GET_FAVORITE_MOVIES + `?userId=${this.userId}`).then(json => {
                resolve(json)
            })
        })
    }
}

export default Movie