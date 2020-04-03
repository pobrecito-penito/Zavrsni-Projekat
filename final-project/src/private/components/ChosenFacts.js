import React, { useState } from 'react'
import { getFact } from '../../services/api.service';
import AddFavorite from './AddFavorite';
import { addFact } from '../../services/json.server';
import { Spinner2 } from '../../layout/spinner';

const ChosenFacts = () => {
    
    const [mathNumb,setMathNumb] = useState('');
    const [triviaNumb,setTriviaNumb] = useState('');
    const [dateNumb,setDateNumb] = useState('');
    const [fact,setFact] = useState('');
    const [type,setType] = useState('');
    const [number,setNumber] = useState('');

    const [loading,setLoading] = useState(false); 


    const showMathFact = (e) => {
        if(e.key === 'Enter'){
            if(mathNumb < 0){
                setFact('Positive! :)');
                setType('Always Be');
            } else if(mathNumb === ''){
                setType('Choose');
                setFact('Your Number!')
            } else {
                setType('Math fact');
                setNumber(mathNumb);
                setLoading(true);
                getFact(mathNumb,'/math').then(res => {
                    setLoading(false);
                    setFact(res.data);
                    addFact('history',localStorage.getItem('id'),mathNumb,res.data,'math');
                });
            }
        }
    }

    const showTriviaFact = (e) => {
        if(e.key === 'Enter'){
            if(triviaNumb < 0){
                setFact('Positive! :)');
                setType('Always Be');
            } else if(triviaNumb === ''){
                setType('Choose');
                setFact('Your Number!')
            } else {
                setType('Trivia fact');
                setNumber(triviaNumb);
                setLoading(true);
                getFact(triviaNumb,'').then(res => {
                    setLoading(false);
                    setFact(res.data);
                    addFact('history',localStorage.getItem('id'),triviaNumb,res.data,'trivia');
                });
            }
        }
    }
    
    const showDateFact = () => {
        if(dateNumb === ''){
            setType('Choose');
            setFact('Your Number!')
        } else {
            setLoading(true);
            setType('Date fact');
            getFact(dateNumb,'/date').then(res => {
                setLoading(false);
                setNumber(dateNumb);
                setFact(res.data);
                addFact('history',localStorage.getItem('id'),dateNumb,res.data,'date');
            });
        }
    }
    
    return(
        <div className="chosen-facts">
            <div className="facts">
            <div className="fact">
                <h3>Math</h3>
                <input type="number" className="int" placeholder="?" onInput={(e) => setMathNumb(e.target.value)} onKeyDown={(e) => showMathFact(e)} />
            </div>
            <div className="fact">
                <h3>Trivia</h3>
                <input type="number" className="int" placeholder="?" onInput={(e) => setTriviaNumb(e.target.value)} onKeyDown={(e) => showTriviaFact(e)} />
            </div>
            <div className="fact">
                <h3>Date</h3>
                <form onSubmit={(e) => { e.preventDefault(); showDateFact() }}>
                    <input type="text" className="int" placeholder="?" onInput={(e) => setDateNumb(e.target.value)} pattern="(0?[1-9]|1[012])[\/\/](0?[1-9]|[12][0-9]|3[01])$" />
                    <input type="submit" id="btn-submit" />
                </form>
            </div>
            </div>
            <div className="load"> 
                {loading ? <Spinner2 /> : 
                    fact === '' ?
                    <div></div> :
                    <div className="facts-p">
                    <p>{type}</p> 
                    <p>{fact}</p>
                    <AddFavorite user={localStorage.getItem('id')} number={number} fact={fact} type={type} />
                    </div>}
            </div>
        </div>
    )

}

export default ChosenFacts