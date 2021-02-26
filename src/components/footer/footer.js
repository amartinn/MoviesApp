import React from 'react'
import styles from './footer.module.css'
import translate from '../../translations'
import {Typography} from '@material-ui/core'
const Footer = () => (
    <footer className={styles.footer}>
        <Typography>{translate('footer.text')}</Typography>
    </footer>
)

export default Footer