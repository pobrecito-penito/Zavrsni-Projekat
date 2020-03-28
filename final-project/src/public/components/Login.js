import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    let user = {
        username: username,
        password: password
    }

    const history = useHistory();

    const handleClick = () => {
        console.log(user);
        document.querySelector('#username').value = '';
        document.querySelector('#password').value = '';
        history.push('home');
    }

    return(
        <form id="login-form" onSubmit={(e) => { e.preventDefault(); handleClick()}}>
            <input type="text" id="username" placeholder="Username" onInput={(e) => setUsername(e.target.value)} required/>
            <input type="password" id="password" placeholder="Password" onInput={(e) => setPassword(e.target.value)} required/>
            <input type="submit" value="Log in!" />
        </form>
    )
}

export default Login