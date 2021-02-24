import React from 'react';
import styles from './hero.module.css'
import { Typography,Button, } from '@material-ui/core'


const Hero = () => {

    return (
        <section className={styles["hero-wrapper"]}>
            <article className={styles["hero-img"]}>
                <article className={styles["hero-text-wrapper"]} >
                    <Typography variant="h4">
                        Heading
                    </Typography>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button className={styles.["hero-search-btn"]}>Search</Button>
                </article>
            </article>
        </section>
    )
}

export default Hero