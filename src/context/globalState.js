import React, { createContext, useReducer, useEffect } from 'react'
import GlobalReducer from '../reducers/globalReducer'
import LS from '../utils/localStorageHelper'

const languageKey = '_language'
const userKey = '_userId'
const initialState = {
    language: LS.getItem(languageKey) ?? 'en-US',
    userId: LS.getItem(userKey) ?? ''
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState)
    useEffect(() => {
        LS.setItem(languageKey,state.language)
    })

    const changeLanguage = language => {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: language})
    }
    return (
        <GlobalContext.Provider
         value={{ 
            changeLanguage: changeLanguage
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}