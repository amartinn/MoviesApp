import axios from 'axios'

class HTTP {
    post(url, body) {
        const jsonBody = JSON.stringify(body)
        const config = {
            url,
            method: 'POST',
            body: jsonBody,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios(config)
            .then(res => res.json())
            .catch(error => {
                return {
                    error
                }
            })
    }
    get(url) {
        const config = {
            url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios(config)
            .then(res => res.json())
            .catch(error => {
                return {
                    error
                }
            })
    }
    delete(url,body) {
        const config = {
            url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios(config)
            .then(res => res.json())
            .catch(error => {
                return {
                    error
                }
            })
    }
    put(url, body) {
        const jsonBody = JSON.stringify(body)
        const config = {
            url,
            method: 'PUT',
            body: jsonBody,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios(config)
            .then(res => res.json())
            .catch(error => {
                return {
                    error
                }
            })
    }
}

export default new HTTP()