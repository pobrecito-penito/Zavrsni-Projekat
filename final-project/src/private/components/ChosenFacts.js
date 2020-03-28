import React, { useState } from 'react'
import { getFact } from '../../services/api.service';

const ChosenFacts = () => {

    const [number,setNumber] = useState('');
    
    const [mathFact,setMathFact] = useState('');
    const [triviaFact,setTriviaFact] = useState('');
    const [dateFact,setDateFact] = useState('');

    const showMathFact = (e) => {
        if(e.key === 'Enter'){
            getFact(number,'/math').then(res => {
                console.log(res.data);
                setMathFact(res.data);
            })
            console.log(number);
        }
    }

    const showTriviaFact = (e) => {
        if(e.key === 'Enter'){
            getFact(number,'').then(res => {
                console.log(res.data);
                setTriviaFact(res.data);
            })
        }
    }
    
    const showDateFact = () => {
        getFact(number,'/date').then(res => {
            console.log(res.data);
            setDateFact(res.data);
        })
    }
    
    
    return(
        <div className="chosen-facts">
            <div className="fact">
                <h3>Math</h3>
                <input type="number" className="number" placeholder="?" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => showMathFact(e)} />
                <p>{mathFact}</p>
            </div>
            <div className="fact">
                <h3>Trivia</h3>
                <input type="number" className="number" placeholder="?" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => showTriviaFact(e)} />
                <p>{triviaFact}</p>
            </div>
            <div className="fact">
                <h3>Date</h3>
                <form onSubmit={(e) => { e.preventDefault(); showDateFact() }}>
                    <input type="text" className="number" placeholder="?" onInput={(e) => setNumber(e.target.value)} pattern="(0?[1-9]|1[012])[\/\/](0?[1-9]|[12][0-9]|3[01])$" />
                    <input type="submit" id="btn-submit" />
                </form>
                <p>{dateFact}</p>
            </div>
        </div>
    )

}

export default ChosenFacts