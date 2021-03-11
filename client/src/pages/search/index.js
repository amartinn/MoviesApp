import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./search.module.css";
import { SearchBox,MetaTags } from "../../components";
import API from "../../utils/dataHelper";
import { Movie } from "../../components";
import { Container, Typography } from "@material-ui/core";
import translate from "../../translations";

import * as ACTIONS from "../../actions/movie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Search = (props) => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const {getMovies} = props.actions;
  const {language} = props;
  useEffect(() => {
    getMovies()
    API.getMoviesByQuery(query).then((data) => {
      setMovies(data.results);
    });
  }, [query,getMovies,language]);
  return (
    <>
        <MetaTags/>
      <article className={styles["search-wrapper"]}>
        <SearchBox />
      </article>
      <Container className={styles["movies-wrapper"]}>
        {movies.length !== 0 ? (
          movies.map((movie) => {
            return <Movie key={movie.id} isFavorite={true} isLink={true} movie={movie} />;
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


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    language:state.language
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS;
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);