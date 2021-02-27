import React from 'react'
import styles from './header.module.css'
import SearchBox from '../searchBox/searchBox.js'
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import {LanguageDropdown} from '../'

const Header = () => (
    <AppBar className={styles.header} position='static'>
        <Toolbar className={styles['header-toolbar']}> 
            <Typography className={styles['header-title']} variant='h6' noWrap>
               <Link className={styles['header-title-link']} to={'/'}> My Movie Collection</Link>
          </Typography>
          <nav className={styles.nav}>
              <ul>
                  <li>
                  <LanguageDropdown/>
                  </li>
                  <li>
                  <SearchBox/>
                  </li>
              </ul>
          </nav>
        </Toolbar>
    </AppBar>
)


export default Header