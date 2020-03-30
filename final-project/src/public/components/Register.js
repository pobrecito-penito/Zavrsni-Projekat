import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { registerUser, loginUser } from '../../services/api.server';
import { setToken, setId } from '../../services/auth.service';

const Register = () => {
    const [name,setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPass,setConfirmPass] = useState('');

    const history = useHistory();

    let user = {
        name: name,
        surname: surname,
        username: username,
        password: password,
        email: email,
    }

    const handleSubmit = () => {
        if(password === confirmPass){
            registerUser(user).then(() => {
               loginUser(username,password).then(res => {
                   setToken(res.data.token);
                   setId(res.data.user.user_id);
                   history.push('home');
               }) 
            })
        } else {
            alert(`Passwords don't match!`);
        }
    }

    return(
        <form className="register-form" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
            <div className="reg-input"><input type="text" id="name" placeholder="NAME" onInput={(e) => setName(e.target.value)} required/></div>
            <div className="reg-input"><input type="text" id="surname" placeholder="SURNAME" onInput={(e) => setSurname(e.target.value)} required/></div>
            <div className="reg-input"><input type="text" id="username" placeholder="USERNAME" onInput={(e) => setUsername(e.target.value)} required/></div>
            <div className="reg-input"><input type="email" id="email" placeholder="EMAIL" onInput={(e) => setEmail(e.target.value)} pattern=".+@.+\..+" required/></div>
            <div className="reg-input"><input type="password" id="password" placeholder="PASSWORD" onInput={(e) => setPassword(e.target.value)} required/></div>
            <div className="reg-input"><input type="password" id="conf-pass" placeholder="CONFIRM PASSWORD" onInput={(e) => setConfirmPass(e.target.value)} required/></div>
            <div className="reg-input"><input className="reg-btn" type="submit" value="Register!" /></div>
        </form>
    )
}

export default Register