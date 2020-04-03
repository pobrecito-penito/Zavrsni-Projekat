import React from 'react'
import { isLogin } from '../../services/auth.service'
import { Link } from 'react-router-dom'
import { deleteUser } from '../../services/auth.service'
import { useHistory } from 'react-router-dom'

const Header = () => {

    const history = useHistory();

    const handleClick = () => {
        deleteUser().then(() => {
            history.push('/');
        })
    }

    if(isLogin()){
        return(
            <div className="header">
                <div className="help">
                <p>Bring meaning to your metrics and stories to your dates!</p>
                <div id="logout">
                    <button className="logout" onClick={() => handleClick()}>Log Out!</button>
                    </div>
                    </div>
                <div className="nav-bar">
                    <Link className="nav" to="/home">Home</Link>
                    <Link className="nav" to="/youchoose">You Choose!</Link>
                    <Link className="nav" to="/wechoose">We Choose!</Link>
                    <Link className="nav" to="/morefacts">More Facts!</Link>
                    <Link className="nav" to="/converter">Text Converter!</Link>
                    </div>
            </div>
        )
    } else {
        return(
            <>
            <div className="header">
                <p>Bring meaning to your metrics and stories to your dates!</p>
            </div>
            </>
        )
    }
}

export default Header