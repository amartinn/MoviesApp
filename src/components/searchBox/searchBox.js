import React,{useState} from 'react'
import styles from './searchBox.module.css'
import {InputBase,Button} from '@material-ui/core'
const SearchBox = () => {

    const [term,setTerm] = useState('');


   return ( <div className={styles['search-wrapper']}>
        <InputBase
            placeholder="Search by movie name..."
            onChange={(e) => {setTerm(e.target.value)}}
            classes={{
                input: styles['search-input'],
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
       <Button to={`/search/${term}`}className={styles['search-btn']}>Search</Button>
    </div>)
}
export default SearchBox;


