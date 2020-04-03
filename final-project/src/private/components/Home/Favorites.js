import React, { useState, useEffect } from 'react'
import { getFacts, deleteFact } from '../../../services/json.server';
import Header from '../../../public/components/Header';

const Favorites = () => {
    const [fav,setFav] = useState([]);
    const [help,setHelp] = useState([]);

    useEffect(() => {
        getFacts('favorites').then(res => {
            let temp = [];
            res.data.forEach(el=> {
                if(el.user === localStorage.getItem('id')){
                    temp.push(el);
                }
            });
            setHelp(temp);
            setFav(temp);
        })
    },[])

    const handleClick = (id) => {
        deleteFact('favorites',id).then(() => {
        getFacts('favorites').then(res => {
            let temp = [];
            res.data.forEach(el=> {
                if(el.user === localStorage.getItem('id')){
                    temp.push(el);
                }
            });
            setFav(temp);
            setHelp(temp);
        })
    })
    }

    const handleInput = (e) => {
        let filtered = help.filter(el => el.fact.includes(e.target.value));
        setFav(filtered);
    }
    
    return(
        <>
        <Header />
        <div className="history">
            <h3>Your Favorite Facts!</h3>
            <input type="text" onInput={(e) => handleInput(e)} placeholder="Search" />
            <ul>
                {fav.map((el,index) => {
                    return(
                        <div key={index}>
                            <li>{el.fact}
                            <button className="his-btn" id="btn-li" onClick={() => handleClick(el.id)}>x</button>
                            </li>
                        </div>
                    )   
                })}
            </ul>
        </div>
        </>
    )

}

export default Favorites