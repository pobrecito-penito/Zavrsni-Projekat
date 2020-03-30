import React, { useState } from 'react'
import { getUserById } from '../../services/api.server'

const Profile = () => {

    const [user,setUser] = useState({
        username: '',
        name: '',
        surname: '',
        email: '',
    })

    getUserById(localStorage.getItem('id')).then(res => {
        setUser({
            username: res.data.user.username,
            name: res.data.user.name,
            surname: res.data.user.surname,
            email: res.data.user.email
        })
    })

    return(
        <div className="profile">
           <p>Hello {user.username}!</p>
           <div className="user">
               <h3>Info</h3>
               <p>Name: {user.name}</p>
               <p>Surname: {user.surname}</p>
               <p>Email: {user.email}</p>
           </div>
        </div>
    )
}

export default Profile