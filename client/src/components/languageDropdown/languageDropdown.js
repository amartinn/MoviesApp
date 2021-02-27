import React,{useState,useContext} from 'react'
import {Select} from '@material-ui/core'
import {GlobalContext} from '../../context/globalState'

const LanguageDropdown = () => {    
    const {changeLanguage, language} = useContext(GlobalContext)
    const [langValue,setLangValue] = useState(language)
    const handleChange = e => {
        setLangValue(e.target.value)
        console.log(e.target.value)
        changeLanguage(e.target.value)
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