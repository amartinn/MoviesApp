import axios from 'axios'

const API_KEY = '169aa130a50c8a11049cdad165dc6726';

const exports = {
    getMoviesByQuery : (query) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
        return axios.get(url).then(info => info.data)
    },
    getMovieById: (movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`
        return axios.get(url).then(info => info.data)
      },
}

export default exports;