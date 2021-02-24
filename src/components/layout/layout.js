import React from 'react'
import {Navigation,Footer} from '../'
const Layout = ({children}) => {

    return (
        <>
        <Navigation/>
        {children}
        <Footer/>
        </>
    )

}

export default Layout;