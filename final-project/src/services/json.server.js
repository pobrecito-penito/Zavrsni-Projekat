import axios from 'axios'

const url = 'http://localhost:3000';

const addFact = (path,user,number,fact,type) => {
    if(fact !== '' && type !== ''){
        getFacts(path).then(res => {
            if(res.data.find(el => el.fact === fact)){
                return
            } else {
                return axios.post(`${url}/${path}`,{user,number,fact,type});
            }
        })  
    }
}

const getFacts = async(path) => {
    return await axios.get(`${url}/${path}`);
}

const deleteFact = async(path,id) => {
    return await axios.delete(`${url}/${path}/${id}`);
}

export { addFact, getFacts, deleteFact }