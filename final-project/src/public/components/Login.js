import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../services/api.server';
import { setToken, setId, isLogin } from '../../services/auth.service';
import Header from './Header';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    const handleClick = () => {
        loginUser(username,password).then(res => {
            setToken(res.data.token);
            setId(res.data.user.user_id);
            if(isLogin()){
                console.log('jeste');
                
            } else {
                console.log('nije');
                
            }
            history.push('home');
        }) 
    }

    return(
        <>
        <Header />
        <form className="register-form" id="login" onSubmit={(e) => { e.preventDefault(); handleClick()}}>
            <div className="reg-input"><input type="text" id="username" placeholder="USERNAME" onInput={(e) => setUsername(e.target.value)} required/></div>
            <div className="reg-input"><input type="password" id="password" placeholder="PASSWORD" onInput={(e) => setPassword(e.target.value)} required/></div>
            <div className="reg-input"><input id="reg-btn" type="submit" value="Log in!" /></div>
        </form>
        </>
    )
}

export default Login