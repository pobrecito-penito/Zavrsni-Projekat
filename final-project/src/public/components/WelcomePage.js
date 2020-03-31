import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import Header from './Header'

const WelcomePage = () => {
    return(
        <>
        
        <Header />
        <Navigation />
        <div className="links">
            <Link className="link" to="/register">Sign up</Link>
            <p id="or">or</p>
            <Link className="link" to="/login">Log in</Link>
        </div>
        
        </>
    )
}

export default WelcomePage