import axios from 'axios'
import LS from './localStorageHelper'
const API_KEY = '169aa130a50c8a11049cdad165dc6726';
const language = LS.getItem('_language')
const exports = {
    getMoviesByQuery: (query) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=${language}`
        return axios.get(url).then(info => info.data)
    },
    getMovieById: (movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${language}`
        return axios.get(url).then(info => info.data)
    },
}

export default exports;