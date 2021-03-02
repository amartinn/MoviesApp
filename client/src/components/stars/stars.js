import React, { useState} from "react";
import styles from "./stars.module.css";
import ReactStars from "react-rating-stars-component";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import translate from "../../translations";
import * as ACTIONS from "../../actions/rating";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Stars = ({ actions, ratings }) => {
  const { id } = useParams();
  const exists = ratings.find(x => x.movieId === id)
  const [rating, setRating] = useState(exists?.rating ?? 0);
  const { updateRating,createRating } = actions;

  const ratingChanged = (newRating) => {
    const exists = ratings.find(x => x.movieId === id);
    if(exists)
    {
      updateRating(id,newRating);
    }
    else{
      createRating(id,newRating)
    }
    setRating(newRating)
  };
  return (
    <>
      <Typography variant="h4">{translate("rating.text")}</Typography>
      <ReactStars
        className={styles.stars}
        value={rating}
        count={5}
        onChange={ratingChanged}
        size={50}
        activeColor="#ffd700"
      />
    </>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
