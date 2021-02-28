import Movie from './controllers/movie'
import Comment from './controllers/comment'
import Rating from './controllers/rating'
const APP = {
    movies: new Movie(),
    comments: new Comment(),
    ratings: new Rating()
}
window.__APP__ = APP
export default APP