import Movie from './controllers/movie'
import Comment from './controllers/comment'
const APP = {
    movies: new Movie(),
    comments: new Comment()
}
window.__APP__ = APP
export default APP