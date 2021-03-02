import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import styles from "./error.module.css";
import {MetaTags} from '../../components'
import translate from "../../translations";
const ErrorPage = () => {
  return (
    <>
        <MetaTags/>
      <Container className={styles.container}>
        <Typography variant="h1">OOPS</Typography>
        <Typography variant="h6">404- {translate("error.text")}</Typography>
      </Container>
      <Container className={styles.container}>
        <Link className={styles.link} to="/">
          {translate("go.to.homepage")}
        </Link>
      </Container>
    </>
  );
};

export default ErrorPage;
