import React from 'react'
import { Header, Footer } from '../'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import User from '../../utils/userHelper'


const setUser = ({listen}) =>{
    listen(_ => {
        const {getUser,setUser} = User
        try {
            const user = getUser()
            if (!user) {
                setUser(uuid())
            }
        }
        catch (err) {
            console.error(err)
        }
    })
}
const Layout = ({ children }) => {
    const history = useHistory()
    setUser(history)
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )

}

export default Layout