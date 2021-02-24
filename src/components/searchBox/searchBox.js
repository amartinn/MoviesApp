import React from 'react'
import styles from './searchBox.module.css'
import {InputBase,Button} from '@material-ui/core'

const SearchBox = () => {
   return ( <div className={styles['search-wrapper']}>
        <InputBase
            placeholder="Search by movie name..."
            classes={{
                input: styles['search-input'],
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
        <Button className={styles['search-btn']}>Search</Button>
    </div>)
}
export default SearchBox;


