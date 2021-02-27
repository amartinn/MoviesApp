import React from "react";
import { FavoriteMovie } from "../";
import styles from "./favoriteMovieList.module.css";
import translate from "../../translations";
import { Container } from "@material-ui/core";
import * as ACTIONS from "../../actions/movie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const FavoriteMovieList = (props) => {
  const favoriteMovies = props.movies;
  return favoriteMovies.length > 0 ? (
    <>
      <h2>{translate("favorite.section.text")}</h2>
      <Container className={styles["favorite-movie-wrapper"]}>
        {favoriteMovies &&
          favoriteMovies.map((movie) => {
            return <FavoriteMovie key={movie.id} movie={movie} />;
          })}
      </Container>
    </>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS;
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);
