import React,{useState} from 'react'
import styles from './searchBox.module.css'
import {InputBase,Button} from '@material-ui/core'
import {Link,BrowserRouter} from 'react-router-dom';
const SearchBox = () => {
    const [term,setTerm] = useState('')
    const clickHandler = () => setTerm('')
   return (
   <div className={styles['search-wrapper']}>
        <InputBase
            placeholder="Search by movie name..."
            onChange={(e) => {setTerm(e.target.value)}}
            classes={{
                input: styles['search-input'],
            }}
            value={term}
            inputProps={{ 'aria-label': 'search' }}
        />
        <Link to={'/search/' + term} onClick={clickHandler} className={styles['search-btn']}>Search</Link>
    </div>
    )
}
export default SearchBox;


