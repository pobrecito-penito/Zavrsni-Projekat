import React, { useState } from 'react'
import { getFact } from '../../services/api.service';

const ChosenFacts = () => {

    const [number,setNumber] = useState('');
    const [fact,setFact] = useState('...');
    const [type,setType] = useState('Fact coming here ↓');

    const showMathFact = (e) => {
        if(e.key === 'Enter'){
            if(number < 0){
                setFact('Positive! :)');
                setType('Always Be');
            } else {
                getFact(number,'/math').then(res => setFact(res.data));
                setType('Math fact');
            }
        }
    }

    const showTriviaFact = (e) => {
        if(e.key === 'Enter'){
            if(number < 0){
                setFact('Positive! :)');
                setType('Always Be');
            } else {
                setFact('Loading...')
                getFact(number,'').then(res => setFact(res.data));
                setType('Trivia fact');
            }
        }
    }
    
    const showDateFact = () => {
        getFact(number,'/date').then(res => setFact(res.data));
        setType('Date fact');
    }
    
    
    return(
        <div className="chosen-facts">
            <div className="facts">
            <div className="fact">
                <h3>Math</h3>
                <input type="number" className="number" placeholder="?" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => showMathFact(e)} />
            </div>
            <div className="fact">
                <h3>Trivia</h3>
                <input type="number" className="number" placeholder="?" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => showTriviaFact(e)} />
            </div>
            <div className="fact">
                <h3>Date</h3>
                <form onSubmit={(e) => { e.preventDefault(); showDateFact() }}>
                    <input type="text" className="number" placeholder="?" onInput={(e) => setNumber(e.target.value)} pattern="(0?[1-9]|1[012])[\/\/](0?[1-9]|[12][0-9]|3[01])$" />
                    <input type="submit" id="btn-submit" />
                </form>
            </div>
            </div>
            <div className="facts-p">
            <p>{type}</p> 
            <p>{fact}</p>
            </div>
        </div>
    )

}

export default ChosenFacts