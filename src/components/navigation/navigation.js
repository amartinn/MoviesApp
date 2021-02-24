import React from 'react'
import styles from './navigation.module.css'
import SearchBox from '../searchBox/searchBox.js'

import { AppBar, Toolbar, Typography } from '@material-ui/core'


const Navigation = () => (
    <AppBar className={styles.header} position="static">
        <Toolbar className={styles["header-toolbar"]}> 
            <Typography className={styles["header-title"]} variant="h6" noWrap>
                My Movie Collection
          </Typography>
          <SearchBox/>
        </Toolbar>
    </AppBar>
)


export default Navigation;