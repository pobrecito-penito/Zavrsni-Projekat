import React, { useState, useEffect } from 'react'
import { getFacts, deleteFact } from '../../../services/json.server';
import Header from '../../../public/components/Header'

const History = () => {
    const [his,setHis] = useState([]);
    const [help,setHelp] = useState([]);

    useEffect(() => {
        getFacts('history').then(res => {
            let temp = [];
            res.data.forEach(el=> {
                if(el.user === localStorage.getItem('id')){
                    temp.push(el);
                }
            });
            setHelp(temp);
            setHis(temp);
        })
    },[])
    
    const handleClick = () => {
        getFacts('history').then(res => {
            res.data.forEach(el=> {
                if(el.user === localStorage.getItem('id')){
                    deleteFact('history',el.id);
                }
            });
        })
        setHelp([]);
        setHis([]);
    }

    const handleInput = (e) => {
        let filtered = help.filter(el => el.fact.includes(e.target.value));
        setHis(filtered);
    }
    
    return(
        <>
        <Header />
        <div className="history">
            <h3>History</h3>
            <input type="text" onInput={(e) => handleInput(e)} placeholder="Search" />
            <ul>
                {his.map((el,index) => <li key={index}>{el.fact}</li>)}
            </ul>
            <button className="his-btn" onClick={() => handleClick()}>Clear History</button>
        </div>
        
        </>
    )

}

export default History