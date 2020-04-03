import React, { useState, useEffect } from 'react'
import { getUserById } from '../../../services/api.server'
import { Link } from 'react-router-dom'

const Profile = () => {

    const [user,setUser] = useState({
        username: '',
        name: '',
        surname: '',
        email: '',
    })

    let id = localStorage.getItem('id');

    useEffect(() => {
        getUserById(id).then(res => {
            setUser({
                username: res.data.user.username,
                name: res.data.user.name,
                surname: res.data.user.surname,
                email: res.data.user.email
            })
        })
    },[id])
    

    return(
        <div className="profile">
            <div className="infos">
            <div className="username">
           <h3>Hello {user.username}!</h3>
           </div>
           <div className="user">
               <h4>Your Info</h4>
               <p>Name: {user.name}</p>
               <p>Surname: {user.surname}</p>
               <p>Email: {user.email}</p>
           </div>
           </div>
           <div className="fav">
               <div>
               <Link className="nav" to="/favorites">Favorites</Link>
               </div>
               <div>
               <Link className="nav" to="/history">History</Link>
               </div>
           </div>
        </div>
    )
}

export default Profile