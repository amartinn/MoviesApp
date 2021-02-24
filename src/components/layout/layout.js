import React from 'react'
import {Navigation,Footer} from '../'
const Layout = ({children,searchTerm,setSearchTerm}) => {

    return (
        <>
        <Navigation/>
        {children}
        <Footer/>
        </>
    )

}

export default Layout;