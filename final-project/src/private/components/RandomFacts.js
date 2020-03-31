import React, { useState, useEffect } from 'react'
import { getRandomFact } from '../../services/api.service';

const RandomFact = () => {
    const [selected,setSelected] = useState('');
    const [fact,setFact] = useState('Fact coming here...');

    useEffect(() => {
        getRandomFact(selected).then(res => setFact(res.data));
    },[selected])
    

    return(
        <div className="random-facts">
            <div className="text">
            <p>If you're not sure which number to choose, we'll choose one for you! Just tell us what type of fact you want to know.</p>
            </div>
            <div className="select">
            <select onChange={(e) => setSelected(e.target.value)}>
                <option value="math" >Math Fact</option>
                <option value="trivia">Trivia Fact</option>
                <option value="date">Date Fact</option>
                <option value="year">Year Fact</option>
            </select>
            </div>
            <div className="fact-p">
                <p>{fact}</p>
            </div>
        </div>
    )

}

export default RandomFact