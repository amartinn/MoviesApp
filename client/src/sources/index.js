import Movie from './controllers/movie'
import Comment from './controllers/comment'
import Rating from './controllers/rating'
import User from './controllers/user'
const APP = {
    movies: new Movie(),
    comments: new Comment(),
    ratings: new Rating(),
    user: new User()
}
window.__APP__ = APP
export default APP