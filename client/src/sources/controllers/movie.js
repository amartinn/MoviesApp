import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from '../links'
import HTTP from '../HTTP'

class Movie {
    addToFavorites(movie) {
        const body = {
            movie
        }
        // WILL UNCOMMENT IT OUT WHEN BACKEND API IS DONE.
        // return new Promise((resolve, reject) => {
        //     HTTP.post(ADD_TO_FAVORITES,body).then(json => {
        //         if (!json.error) {
        //             resolve(json)
        //         } else {
        //             reject(json)
        //         }
        //     })
        // })

        return new Promise((resolve, reject) => {
            resolve({movies:movie})
        })
    }
    removeFromFavorites(movie) {
        const body = {
            movie
        }
        return new Promise((resolve,reject) => {
            HTTP.delete(REMOVE_FROM_FAVORITES,body).then(json => {
                if (!json.error) {
                    resolve(json)
                } else {
                    reject(json)
                }
            })
        })
    }
}

export default Movie