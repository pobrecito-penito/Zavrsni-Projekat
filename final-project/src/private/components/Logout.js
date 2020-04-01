import React from 'react'
import { deleteUser } from '../../services/auth.service'
import { useHistory } from 'react-router-dom';

const Logout = () => {

    const history = useHistory();

    const handleClick = () => {
        deleteUser().then(() => {
            history.push('/');
        })
    }

    return(
        <div id="logout">
           <button className="logout" onClick={() => handleClick()}>Log Out!</button>
        </div>
    )

}

export default Logout