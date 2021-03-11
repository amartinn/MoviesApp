import fetch from 'isomorphic-fetch'
import LS from './localStorageHelper'
const API_KEY = '169aa130a50c8a11049cdad165dc6726';
const exports = {
    getMoviesByQuery: (query) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=${getLanguage()}`
        return fetch(url, {
            METHOD: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },
    getMovieById: (movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${getLanguage()}`
        return fetch(url, {
            METHOD: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },
}

const getLanguage = () => {
    return LS.getItem('_language') || 'en'
};
export default exports;