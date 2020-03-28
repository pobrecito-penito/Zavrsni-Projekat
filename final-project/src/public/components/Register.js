import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

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
        email: email, 
        password: password
    }

    const handleSubmit = () => {
        password === confirmPass ? console.log(user) : alert(`Passwords don't match!`);
        document.querySelector('#name').value = ''; 
        document.querySelector('#surname').value = '';
        document.querySelector('#username').value = ''; 
        document.querySelector('#email').value = ''; 
        document.querySelector('#password').value = '';
        document.querySelector('#conf-pass').value = ''; 
        history.push('login');
    }

    return(
        <form id="register-form" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
            <input type="text" id="name" placeholder="Enter your name" onInput={(e) => setName(e.target.value)} required/>
            <input type="text" id="surname" placeholder="Enter your surname" onInput={(e) => setSurname(e.target.value)} required/>
            <input type="text" id="username" placeholder="Enter your username" onInput={(e) => setUsername(e.target.value)} required/>
            <input type="email" id="email" placeholder="Enter your email" onInput={(e) => setEmail(e.target.value)} pattern=".+@.+\..+" required/>
            <input type="password" id="password" placeholder="Enter your password" onInput={(e) => setPassword(e.target.value)} required/>
            <input type="password" id="conf-pass" placeholder="Confirm your password" onInput={(e) => setConfirmPass(e.target.value)} required/>
            <input type="submit" value="Register!" />
        </form>
    )
}

export default Register