import React from 'react'
import Bored from './Bored'
import Profile from './Profile'
import Header from '../../../public/components/Header'
import { isLogin } from '../../../services/auth.service'

const Home = () => {
    return(
        <>
        {isLogin() ? 
            <>
            <Header />
            <Profile />
            <Bored />
            </> : <div></div> }
        </>
    )
}

export default Home