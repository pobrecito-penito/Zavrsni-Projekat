import React, { useState } from 'react'
import { getFact } from '../../services/api.service';
import Spinner from '../../layout/spinner'

const MoreFacts = () => {

    const [number,setNumber] = useState('');
    const [path,setPath] = useState('math');
    
    const [loading,setLoading] = useState(false);

    const [fact1,setFact1] = useState('');
    const [fact2,setFact2] = useState('');
    const [fact3,setFact3] = useState('');

    let numb1 = '';
    let numb2 = '';
    let numb3 = '';

    const startsWith = (e) => {
        if(e.key === 'Enter'){
            if(number < 0){
                setFact1('Just');
                setFact2('Stay');
                setFact3('Positive! :)')
            } else if(number === ''){
                setFact1('Choose');
                setFact2('Your');
                setFact3('Number!');
            } else {
                numb1 = `${number}${Math.floor(Math.random()*10)}`;
                numb2 = `${number}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
                numb3 = `${number}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;   
            }
        }
    }

    const includes = (e) => {
        if(e.key === 'Enter'){
            if(number < 0){
                setFact1('Just');
                setFact2('Stay');
                setFact3('Positive! :)')
            } else if(number === ''){
                setFact1('Choose');
                setFact2('Your');
                setFact3('Number!');
            } else {
                numb1 = `${Math.floor(Math.random()*10)}${number}`;
                numb2 = `${Math.floor(Math.random()*10)}${number}${Math.floor(Math.random()*10)}`;
                numb3 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${number}${Math.floor(Math.random()*10)}`;
            }
        }
    }
    
    const endsWith = (e) => {
        if(e.key === 'Enter'){
            if(number < 0){
                setFact1('Just');
                setFact2('Stay');
                setFact3('Positive! :)')
            } else if(number === ''){
                setFact1('Choose');
                setFact2('Your');
                setFact3('Number!');
            } else {
                numb1 = `${Math.floor(Math.random()*10)}${number}`;
                numb2 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${number}`;
                numb3 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${number}`;
            }
        }
    }

    const showFacts = (e) => {
        if(e.key === 'Enter'){
            setLoading(true);
            getFact(numb1,`/${path}`).then(res => {
                setLoading(false);
                setFact1(res.data);
            });
            getFact(numb2,`/${path}`).then(res => setFact2(res.data));
            getFact(numb3,`/${path}`).then(res => setFact3(res.data));
        }
    }

    return(
        <div className="more-facts">
            <div className="info">
            <p>You can also get random
                <select id="select" onChange={(e) => setPath(e.target.value)}>
                    <option value="math">Math Fact</option>
                    <option value="trivia">Trivia Fact</option>
                </select> 
                for a few numbers that</p>
                <p>startWith(
                        <input className="int" type="number" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => {startsWith(e); showFacts(e)}}/>
                    ), include(
                        <input className="int" type="number" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => {includes(e); showFacts(e)}}/>
                    )or endWith(
                        <input className="int" type="number" onInput={(e) => setNumber(e.target.value)} onKeyDown={(e) => {endsWith(e); showFacts(e)}}/>
                    )
            </p>
            </div>
            {loading ? <Spinner /> : 
            <div id="p" className="fact-p">
            <p>{fact1}</p>
            <p>{fact2}</p>
            <p>{fact3}</p>
            </div> }
        </div>
    )

}

export default MoreFacts