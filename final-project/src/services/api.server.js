import axios from 'axios'

const url = 'https://coetus.herokuapp.com/api/users';

const getAllUsers = async() => {
    return await axios.get(`${url}`)
}

const getUserById = async(user_id) => {
    return await axios.get(`${url}/${user_id}`)
}

const registerUser = async(user) => {
    return await axios.put(`${url}`,user)
}

const loginUser = async(username,password) => {
    return await axios.post(`${url}`,{username, password})
}

export { getAllUsers, getUserById, registerUser, loginUser }