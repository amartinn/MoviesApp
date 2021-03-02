import React from "react";
import { Hero, FavoriteMovieList,MetaTags } from "../../components";

const HomePage = () => {
  return (
    <>
    <MetaTags/>
      <Hero />
      <FavoriteMovieList />
    </>
  );
};

export default HomePage;
