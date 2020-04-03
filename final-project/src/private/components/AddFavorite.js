import React, { useState } from 'react'
import { addFact, getFacts, deleteFact } from '../../services/json.server'

const AddFavorite = ({user,fact,number,type}) => {

    const [factId,setFactId] = useState('');
    const [color,setColor] = useState('white');
   
    const [isClicked,setIsClicked] = useState(false);

    getFacts('favorites').then(res => {
        let double = res.data.find(el => el.user === user && el.fact === fact);
        if(double){
            setColor('red');
            setIsClicked(true);
            setFactId(double.id);
        } else {
            setColor('white');
            setIsClicked(false);
        }
    })

    const handleClick = () => {
        if(isClicked) {
            setColor('white');
            deleteFact('favorites',factId);
            setIsClicked(!isClicked);
        } else if(!isClicked) {
            addFact('favorites',user,number,fact,type);
            setColor('red');
            setIsClicked(!isClicked);
        } 
    }

    return(
        <button className="add" style={{color}} onClick={() => handleClick()}>♥</button>
    )
}

export default AddFavorite