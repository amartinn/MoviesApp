import React, { useContext, useState, useEffect } from "react";
import styles from "./movie.module.css";
import genres from "../../utils/genreHelper";
import { Typography, Chip, Button } from "@material-ui/core";
import CONSTANTS from "../../utils/globalConstants";
import translate from "../../translations";

const Movie = ({ movie, isFavorite }) => {
  const { DEFAULT_IMAGE_URL, IMAGE_URL } = CONSTANTS;
  // const { addToFavorites, removeFromFavorites } = useContext(MovieContext);
  const [buttonText, setButtonText] = useState("");
  const [buttonClass, setButtonClass] = useState("");
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
  }, [isFavorite]);

  const clickHandler = () => {
    if (isFavorite) {
      // removeFromFavorites(movie);
    } else {
      // addToFavorites(movie);
    }
    isFavorite = !isFavorite;
  };
  const getGenreText = (genreValue) =>
    genres
      .find((genre) => genre.id === genreValue)
      .name
      .replace(" ", "_")
      .toLowerCase();
  return (
    <article className={styles["movie-outer-wrapper"]}>
      <article className={styles["movie-wrapper-image"]}>
        <img width="200" height="300" src={posterURL} alt={movie.title}></img>
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
export default Movie;
