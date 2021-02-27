import Movie from './controllers/movie'

const APP = {
    movies: new Movie()
}
window.__APP__ = APP
export default APP