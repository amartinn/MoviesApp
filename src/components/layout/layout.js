import React from 'react'
import {Header,Footer} from '../'
const Layout = ({children,searchTerm,setSearchTerm}) => {

    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )

}

export default Layout