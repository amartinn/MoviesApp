import React from "react";
import Navigation from "./navigation";
import * as ratingActions from "./actions/rating";
import * as movieActions from "./actions/movie";
import * as commentActions from "./actions/comment";
import * as userActions from "./actions/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUserId } from "./utils/userHelper";
class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      getComments : props.actions.getComments,
      getRatings :props.actions.getRatings,
      getMovies :props.actions.getMovies,
      setUser : props.actions.setUser,
      getUser : props.actions.getUser
    }
    this.setOrGetUser = this.setOrGetUser.bind(this)
  }
  componentDidMount(){
    this.setOrGetUser().then(_ => {
      this.state.getComments()
      this.state.getMovies()
      this.state.getRatings()
    })
  }
  setOrGetUser(){
    //gets the userId from localStorage
    const user = getUserId();
    if (!user) {
      //fetches to backend to create new user and sets userId in local storage
      return new Promise((resolve) => resolve(this.state.setUser()));
    } else {
      //returns the movieId from local storage
      return new Promise((resolve) => resolve(this.state.getUser()));
    }
  }
  render(){
    return (<Navigation></Navigation>)
  }
}
const mapStateToProps = (state) => {
  return {
    ratings: state.ratings,
    movies: state.movies,
    comments: state.comments,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = Object.assign(
    {},
    ratingActions,
    movieActions,
    commentActions,
    userActions
  );
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
