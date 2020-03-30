import React from 'react'
import ChosenFacts from './components/ChosenFacts'
import RandomFact from './components/RandomFacts'
import MoreFacts from './components/MoreFacts'
import Converter from './components/Converter'
import Bored from './components/Bored'
import Text from './components/Text'
import Logout from './components/Logout'
import { isLogin } from '../services/auth.service'
import { Redirect, Link } from 'react-router-dom'

const Home = () => {
    if(isLogin()){
    return(
        <>
        <Link className="link" to="/profile">Your Profile</Link>
        <Text />
        <ChosenFacts />
        <RandomFact />
        <MoreFacts />
        <Converter />
        <Bored />
        <Logout />
        </>
    )} else {
       return <Redirect to="/" />
    }
}

export default Home