import React from 'react'
import styles from './footer.module.css'

import {Typography} from '@material-ui/core'
const Footer = () => (
    <footer className={styles.footer}>
        <Typography>Made with ❤️ by Margin Angelov</Typography>
        <Typography>Copyright &copy;</Typography>
    </footer>
)

export default Footer