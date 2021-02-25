import React from 'react'
import styles from './hero.module.css'
import { Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Hero = () => {

    return (
        <section className={styles['hero-wrapper']}>
            <article className={styles['hero-img']}>
                <article className={styles['hero-text-wrapper']} >
                    <Typography variant='h4'>
                        Heading
                    </Typography>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to='/search' className={styles['hero-search-btn']}>Search</Link>
                </article>
            </article>
        </section>
    )
}

export default Hero