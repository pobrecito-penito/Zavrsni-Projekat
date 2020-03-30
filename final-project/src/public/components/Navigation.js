import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return(
        <div className="navigation">
            <div className="info">
                <p>Did you know that the largest right-truncatable prime is 73939133? Meaning that the number remains prime when the last digit is successively removed!</p>
                <p>Or that 123 is the atomic number of the yet-to-be-discovered element unbitrium? That makes two of us!</p>
                <p>Join us and find out more interesting math, trivia and date facts about numbers!</p>
            </div>
            <div className="links">
                <Link className="link" to="/register">Sign up</Link>
                <p id="or">or</p>
                <Link className="link" to="login">Log in</Link>
            </div>
        </div>
    )
}

export default Navigation