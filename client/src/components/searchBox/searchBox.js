import React,{useState} from 'react'
import styles from './searchBox.module.css'
import {InputBase} from '@material-ui/core'
import {Link} from 'react-router-dom'
import translate from '../../translations'
const SearchBox = () => {
    const [term,setTerm] = useState('')
    const clickHandler = () => setTerm('')
   return (
   <div className={styles['search-wrapper']}>
        <InputBase
            placeholder={translate('search.btn.placeholder')}
            onChange={(e) => {setTerm(e.target.value)}}
            classes={{
                input: styles['search-input'],
            }}
            value={term}
            inputProps={{ 'aria-label': 'search' }}
        />
        <Link to={'/search/' + term} onClick={clickHandler} className={styles['search-btn']}>{translate('search.btn')}</Link>
    </div>
    )
}
export default SearchBox

