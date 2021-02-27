import React,{useState,useContext} from 'react'
import {Select} from '@material-ui/core'

const LanguageDropdown = () => {
    const [langValue,setLangValue] = useState('us')
    const handleChange = e => {
        setLangValue(e.target.value)
    }
    return (
        <Select
          native
          value={langValue}
          onChange={handleChange}
          inputProps={{
            name: 'language',
            id: 'language   ',
          }}
        >
          <option aria-label="None" value="en">EN</option>
          <option value='bg'>BG</option>
        </Select>
    )
}

export default LanguageDropdown