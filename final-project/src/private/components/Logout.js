import React from 'react'
import { deleteUser } from '../../services/auth.service'
import { useHistory } from 'react-router-dom';

const Logout = () => {

    const history = useHistory();

    const handleChange = (e) => {
        if(e.target.value === 'logout'){
            deleteUser().then(() => {
                history.push('/');
            })
        }
    }

    return(
        <div id="logout">
            Log out? 
            <select className="logout-select" onChange={(e) => handleChange(e)}>
                <option>No way!</option>
                <option value="logout">Yes, bye!</option>
            </select>
        </div>
    )

}

export default Logout