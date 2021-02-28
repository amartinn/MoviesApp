import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./search.module.css";
import { SearchBox } from "../../components";
import API from "../../utils/dataHelper";
import { Movie } from "../../components";
import { Container, Typography } from "@material-ui/core";
import translate from "../../translations";

const Search = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    API.getMoviesByQuery(query).then((data) => {
      setMovies(data.results);
    });
  }, [query]);
  return (
    <>
      <article className={styles["search-wrapper"]}>
        <SearchBox />
      </article>
      <Container className={styles["movies-wrapper"]}>
        {movies.length !== 0 ? (
          movies.map((movie) => {
            return <Movie key={movie.id} isLink={true} movie={movie} />;
          })
        ) : (
          <Typography variant="h3">
            {translate("search.no_results")}
            <span className={styles["error-word"]}> {query}</span>
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Search;
