import React, { useState } from 'react'
import { getFact } from '../../services/api.service';
import AddFavorite from './AddFavorite';
import { addFact } from '../../services/json.server';
import { Spinner } from '../../layout/spinner';

const MoreFacts = () => {

    const [path,setPath] = useState('math');
    
    const [loading,setLoading] = useState(false);

    const [fact1,setFact1] = useState('');
    const [fact2,setFact2] = useState('');
    const [fact3,setFact3] = useState('');

    const [start,setStart] = useState('');
    const [include,setInclude] = useState('');
    const [end,setEnd] = useState('');

    let numb1 = '';
    let numb2 = '';
    let numb3 = '';

    const setNumbers = (e) => {
        if(e.key === 'Enter'){
            if(start < 0 || include < 0 || end < 0){
                setLoading(false);
                setFact1('Just');
                setFact2('Stay');
                setFact3('Positive! :)')
            } else if(start === '' && include === '' && end === ''){
                setLoading(false);
                setFact1('Choose'); 
                setFact2('Your');
                setFact3('Number!');
            } else if(start !== '' && include !== '' && end !== '') {
                numb1 = `${start}${include}${end}`;
                numb2 = `${start}${include}${Math.floor(Math.random()*10)}${end}`;
                numb3 = `${start}${Math.floor(Math.random()*10)}${include}${end}`;
            } else if(start !== '' && include !== '' && end === '') {
                numb1 = `${start}${include}`;
                numb2 = `${start}${include}${Math.floor(Math.random()*10)}`;
                numb3 = `${start}${Math.floor(Math.random()*10)}${include}${Math.floor(Math.random()*10)}`;   
            } else if(start !== '' && include === '' && end !== '') {
                numb1 = `${start}${end}`;
                numb2 = `${start}${Math.floor(Math.random()*10)}${end}`;
                numb3 = `${start}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${end}`;
            } else if(start !== '' && include === '' && end === '') {
                numb1 = `${start}${Math.floor(Math.random()*10)}`;
                numb2 = `${start}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
                numb3 = `${start}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
            } else if(start === '' && include !== '' && end !== '' ){
                numb1 = `${Math.floor(Math.random()*10)}${include}${end}`;
                numb2 = `${Math.floor(Math.random()*10)}${include}${Math.floor(Math.random()*10)}${end}`;
                numb3 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${include}${end}`;
            } else if(start === '' && include !== '' && end === '') {
                numb1 = `${Math.floor(Math.random()*10)}${include}`;
                numb2 = `${Math.floor(Math.random()*10)}${include}${Math.floor(Math.random()*10)}`;
                numb3 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${include}${Math.floor(Math.random()*10)}`;
            } else if(start === '' && include === '' && end !== '') {
                numb1 = `${Math.floor(Math.random()*10)}${end}`;
                numb2 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${end}`;
                numb3 = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${end}`;
            }
    }}

    const showFacts = (e) => {
        if(e.key === 'Enter'){
            if(start < 0 || include < 0 || end < 0){
                setLoading(false);
                setFact1('Just');
                setFact2('Stay');
                setFact3('Positive! :)')
            } else if(start === '' && include === '' && end === ''){
                setLoading(false);
                setFact1('Choose'); 
                setFact2('Your');
                setFact3('Number!');
            } else {
                setLoading(true);
            getFact(numb1,`/${path}`).then(res => {
                setLoading(false);
                setFact1(res.data);
                addFact('history',localStorage.getItem('id'),numb1,res.data,path);
            });
            getFact(numb2,`/${path}`).then(res => {
                setFact2(res.data);
                addFact('history',localStorage.getItem('id'),numb2,res.data,path);
            }); 
            getFact(numb3,`/${path}`).then(res => {
                setFact3(res.data);
                addFact('history',localStorage.getItem('id'),numb3,res.data,path);
            });  
            } 
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
                        <input className="int" type="number" onInput={(e) => setStart(e.target.value)} onKeyDown={(e) => {setNumbers(e); showFacts(e)}}/>
                    ), include(
                        <input className="int" type="number" onInput={(e) => setInclude(e.target.value)} onKeyDown={(e) => {setNumbers(e); showFacts(e)}}/>
                    )or endWith(
                        <input className="int" type="number" onInput={(e) => setEnd(e.target.value)} onKeyDown={(e) => {setNumbers(e); showFacts(e)}}/>
                    )
            </p>
            </div>
            {loading ? <Spinner /> : 
            fact1 === '' && fact2 === '' && fact3 === '' ? 
            <div></div> :
            <div id="p" className="fact-p">
            <p>{fact1}</p>
            <AddFavorite user={localStorage.getItem('id')} fact={fact1} type={path} />
            <p>{fact2}</p>
            <AddFavorite user={localStorage.getItem('id')}fact={fact2} type={path} />
            <p>{fact3}</p>
            <AddFavorite user={localStorage.getItem('id')} fact={fact3} type={path} />
            </div> }
        </div>
    )

}

export default MoreFacts