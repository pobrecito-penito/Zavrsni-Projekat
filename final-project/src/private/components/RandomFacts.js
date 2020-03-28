import React, { useState, useEffect } from 'react'
import { getRandomFact } from '../../services/api.service';

const RandomFact = () => {
    const [selected,setSelected] = useState('');
    const [fact,setFact] = useState('');

    useEffect(() => {
        getRandomFact(selected).then(res => setFact(res.data));
    },[selected])
    

    return(
        <div className="random-facts">
            <p>Random Fact!</p>
            <select onChange={(e) => setSelected(e.target.value)}>
                <option value="math" selected>Trivia Fact</option>
                <option value="trivia">Year Fact</option>
                <option value="date">Date Fact</option>
                <option value="year">Math Fact</option>
            </select>
            <div>
                <p>{fact}</p>
            </div>
        </div>
    )

}

export default RandomFact