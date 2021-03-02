import React from "react";
import styles from "./stars.module.css";
import ReactStars from "react-rating-stars-component";
import { Typography } from "@material-ui/core";
import translate from "../../translations";
import * as ACTIONS from "../../actions/rating";
import { bindActionCreators,compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Stars extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      movieId: this.props.match.params.id,
      updateRating : this.props.actions.updateRating,
      createRating : this.props.actions.createRating,
      getRatings: this.props.actions.getRatings,
      rating: props.ratings.find(x => Number(x.movieId) === Number(props.match.params.id))?.rating ?? 0,
      ratings: []
    }
    this.ratingChanged = this.ratingChanged.bind(this)
  }
  async componentDidMount(){
     const {payload} = await this.state.getRatings()
     const initialRating = await payload.find(x => Number(x.movieId) === Number(this.state.movieId))?.rating ?? 0
     this.setState({
      ratings: [...payload], 
      rating: initialRating
    })
  }
    ratingChanged(newRating) {
    const exists = this.state.ratings.find(x => x.movieId === this.state.movieId);
    if(exists)
    {
      this.state.updateRating(this.state.movieId,newRating);
    }
    else{
      this.state.createRating(this.state.movieId,newRating)
    }
    this.setState({rating:newRating})
  };
  render(){
      return (
    <>
      <Typography variant="h4">{translate("rating.text")}</Typography>
      <ReactStars
        className={styles.stars}
        value={this.state.rating}
        count={5}
        onChange={this.ratingChanged}
        size={50}
        activeColor="#ffd700"
      />
    </>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    ratings: state.ratings,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS;
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
};


export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Stars);
