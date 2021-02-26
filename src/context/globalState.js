import React, { createContext, useReducer, useEffect } from 'react'
import GlobalReducer from '../reducers/globalReducer'
import LS from '../utils/localStorageHelper'
import {v4 as uuid} from 'uuid'
const languageKey = '_language'
const userKey = '_userId'
const initialState = {
    language: LS.getItem(languageKey) ?? 'en',
    userId: LS.getItem(userKey) ?? ''
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState)
    useEffect(() => {
        const lang = LS.getItem(languageKey)
        if(lang !== state.language){
            window.location.reload()
            LS.setItem(languageKey,state.language)
        }
        const userId = LS.getItem(userKey)
        if(!userId){
            LS.setItem(userKey,uuid())
        }
    })  

    const changeLanguage = language => {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: language})
    }
    return (
        <GlobalContext.Provider
         value={{ 
            changeLanguage: changeLanguage,
            language:state.language
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}