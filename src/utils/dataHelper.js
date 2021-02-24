import axios from 'axios'

const API_KEY = '169aa130a50c8a11049cdad165dc6726';

const exports = {
    getMoviesByQuery : (query) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
        return axios.get(url).then(info => info.data)
    }
}

export default exports;