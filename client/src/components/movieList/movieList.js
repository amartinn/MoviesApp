import React from "react";
import { Movie } from "../";
import styles from "./movieList.module.css";

import { Container } from "@material-ui/core";

const MovieList = ({ movies }) => {
  return (
    <Container className={styles["movies-wrapper"]}>
      {movies &&
        movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
    </Container>
  );
};

export default MovieList;
