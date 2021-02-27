import React,{useEffect} from 'react'
import { Header, Footer } from '../'
import LS from '../../utils/localStorageHelper'
import {v4 as uuid} from 'uuid'

const Layout = ({ children }) => {

        //sets userId to localStorage if there isn't one.
      useEffect(() => {
          const key = '_userId'
          const user = LS.getItem(key)
        if(!user){
            LS.setItem(key,uuid())
        }
      }, []);
  
  

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )

}

export default Layout