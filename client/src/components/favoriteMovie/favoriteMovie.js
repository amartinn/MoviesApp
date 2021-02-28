import React from "react";
import { Card } from "@material-ui/core";
import styles from "./favoriteMovie.module.css";
import { Link } from "react-router-dom";
import CONSTANTS from "../../utils/globalConstants";

const FavoriteMovie = ({ movie }) => {
  const { DEFAULT_IMAGE_URL, IMAGE_URL } = CONSTANTS;
  const posterURL =
    movie.poster_path === null
      ? DEFAULT_IMAGE_URL
      : IMAGE_URL + movie.poster_path;
  return (
    <Link to={`/movies/${movie.id}`}>
      <Card className={styles["favorite-movie"]}>
        <img src={posterURL} alt="movie" width="100" height="150"></img>
      </Card>
    </Link>
  );
};

export default FavoriteMovie;
