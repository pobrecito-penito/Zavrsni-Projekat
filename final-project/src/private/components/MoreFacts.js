import React, { useState } from 'react'
import { getFact } from '../../services/api.service';

const MoreFacts = () => {

    const [number,setNumber] = useState('');
    const [path,setPath] = useState('math');
    
    const [fact1,setFact1] = useState('');
    const [fact2,setFact2] = useState('');
    const [fact3,setFact3] = useState('');

    let numb1 = '';
    let numb2 = '';
    let numb3 = '';

    const startsWith = (e) => {
        if(e.key === 'Enter'){
            numb1 = `${number}${Math.floor(Math.random()*10)}`;
            numb2 = `${number}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
            numb3 = `${number}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;   
        }
    }

    const includes = (e) => {
        if(e.key === 'Enter'){
            numb1 = `${Math.floor(Math.random()*10)}${number}`;
            numb2 = `${Math.floor(Math.random()*10)}${number}${Math.floor(Math.random()*10)}`;
            numb3 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${number}${Math.floor(Math.random()*10)}`;
        }
    }
    
    const endsWith = (e) => {
        if(e.key === 'Enter'){
            numb1 = `${Math.floor(Math.random()*10)}${number}`;
            numb2 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${number}`;
            numb3 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${number}`;
        }
    }

    const showFacts = (e) => {
        if(e.key === 'Enter'){
            getFact(numb1,`/${path}`).then(res => setFact1(res.data));
            getFact(numb2,`/${path}`).then(res => setFact2(res.data));
            getFact(numb3,`/${path}`).then(res => setFact3(res.data));
        }
    }

    return(
        <div className="more-facts">
            <p>You can also get random
                <select onChange={(e) => setPath(e.target.value)}>
                    <option value="math">Math</option>
                    <option value="trivia">Trivia</option>
                    <option value="date">Date</option>
                </select> 
                facts for a few numbers that</p>
                <p>startsWith(
                        <input className="int" type="number" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => {startsWith(e); showFacts(e)}}/>
                    ), includes(
                        <input className="int" type="number" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => {includes(e); showFacts(e)}}/>
                    )or endsWith(
                        <input className="int" type="number" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => {endsWith(e); showFacts(e)}}/>
                    )
            </p>
            <p>{fact1}</p>
            <p>{fact2}</p>
            <p>{fact3}</p>
        </div>
    )

}

export default MoreFacts