import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./movie.module.css";
import getGenreText from "../../utils/genreHelper";
import { Typography, Chip, Button } from "@material-ui/core";
import * as ACTIONS from "../../actions/movie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CONSTANTS from "../../utils/globalConstants";
import translate from "../../translations";

const Movie = (props) => {
  const { DEFAULT_IMAGE_URL, IMAGE_URL } = CONSTANTS;
  const { movie, isLink } = props;
  const { addToFavorites, removeFromFavorites } = props.actions;
  const [buttonText, setButtonText] = useState("");
  const [buttonClass, setButtonClass] = useState("");
  const language = props.language;
  let isFavorite = props.movies.find((x) => x === movie.id);
  let posterURL;
  if (movie.poster_path === null || movie.poster_path === undefined) {
    posterURL = DEFAULT_IMAGE_URL;
  } else {
    posterURL = IMAGE_URL + movie.poster_path;
  }
  useEffect(() => {
    if (isFavorite) {
      setButtonText(translate("removeFromFavorites.btn"));
      setButtonClass("red");
    } else {
      setButtonText(translate("addToFavorites.btn"));
      setButtonClass("green");
    }
  }, [isFavorite,language]);

  const clickHandler = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie.id);
    }
    isFavorite = !isFavorite;
  };
  return (
    <article className={styles["movie-outer-wrapper"]}>
      <article className={styles["movie-wrapper-image"]}>
        {isLink ? (
          <Link to={`/movies/${movie.id}`}>
            <img
              width="200"
              height="300"
              src={posterURL}
              alt={movie.title}
            ></img>
          </Link>
        ) : (
          <img width="200" height="300" src={posterURL} alt={movie.title}></img>
        )}
      </article>
      <article className={styles["movie-wrapper"]}>
        <Typography variant="h4" className={styles["movie-title"]}>
          {movie.title} (
          {movie.release_date && movie.release_date.split("-")[0]})
        </Typography>
        <article className={styles["movie-genre-wrapper"]}>
          {movie.genre_ids &&
            movie.genre_ids.map((genre) => {
              return (
                <Chip
                  className={styles["movie-genre"]}
                  key={genre}
                  label={translate(`genre.${getGenreText(genre)}`)}
                ></Chip>
              );
            })}
        </article>
        <Typography>
          {movie.overview && movie.overview.substring(0, 250)}
        </Typography>
        <Button
          className={`${styles["favorite-btn"]} ${styles[buttonClass]}`}
          onClick={clickHandler}
        >
          {buttonText}
        </Button>
      </article>
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS;
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
