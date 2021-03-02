
import {
    SET_USER
} from '../links'
import HTTP from '../HTTP'
class User {
    setUser() {
        return new Promise((resolve, reject) => {
            HTTP.post(SET_USER).then(json => {
                if (!json.error) {
                    resolve(json)
                } else {
                    reject(json)
                }
            })
        })
    }
}

export default User