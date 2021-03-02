import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/dataHelper";
import { Movie, Stars, Comment,MetaTags } from "../../components";
import styles from "./movieDetails.module.css";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    API.getMovieById(id).then((data) => {
      setMovie(data);
    });
  }, [id]);
  return (
    <>
        <MetaTags/>
      <Movie movie={movie}></Movie>
      <article className={styles["review-section"]}>
        <Stars />
        <Comment />
      </article>
    </>
  );
};

export default MovieDetails;
