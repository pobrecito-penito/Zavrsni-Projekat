import React from 'react'
import Header from '../../public/components/Header'
import Bored from './Bored'
import Logout from './Logout'
import Profile from './Profile'

const Home = () => {
    return(
        <>
        <Header />
        <Profile />
        <Bored />
        </>
    )
}

export default Home