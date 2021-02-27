import React from "react";
import styles from "./hero.module.css";
import { Typography } from "@material-ui/core";
import translate from "../../translations";
const Hero = () => (
  <section className={styles["hero-wrapper"]}>
    <article className={styles["hero-img"]}></article>
    <article className={styles["hero-text-wrapper"]}>
      <Typography className={styles["hero-text-heading"]} variant="h4">
        {translate("hero.heading")}
      </Typography>
      <Typography className={styles["hero-text-description"]}>
        {translate("hero.description")}
      </Typography>
    </article>
  </section>
);

export default Hero;
