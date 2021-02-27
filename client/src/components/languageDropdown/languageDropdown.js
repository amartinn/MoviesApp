import React,{useState} from 'react'
import {Select} from '@material-ui/core'
import * as ACTIONS from '../../actions/language'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
const LanguageDropdown = ({language,actions}) => {
    
    const {updateLanguage} = actions
    const [langValue,setLangValue] = useState(language)
    const handleChange = e => {
        setLangValue(e.target.value)
        updateLanguage(e.target.value)
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

const mapStateToProps = state => {
  return {
       language: state.language
  }
}

const mapDispatchToProps = dispatch => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}



export default connect(mapStateToProps,mapDispatchToProps)(LanguageDropdown)