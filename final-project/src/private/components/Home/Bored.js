import React, { useState } from 'react'
import { getSuggestion } from '../../../services/api.service';

const Bored = () => {

    const [number, setNumber] = useState('');
    const [sugg,setSugg] = useState(`♥`);

    const setSuggestion = (e) => {
        e.preventDefault();

        getSuggestion(number+1).then(res => {
            if(number === 0){
                setSugg(`Oops, we are sorry that you don't have any friends :( Don't worry, you can always ${res.data.activity.toLowerCase()}!`);
            } else if(number < 0){
                setSugg(`Don't be negative! :)`)
            }
            else if(number >= 1 && number < 5){
                setSugg(`${res.data.activity}!`)
            } else if(number === ''){
                setSugg('Zero? :(')
            } else {
                setSugg(`Come on, we know you don't have that many friends!`)
            }
        })

    }

    return(
        <div className="bored">
            <p>Bored? Let's find you something to do! Tell us how many friends you have and we'll give you a suggestion!</p>
                <form onSubmit={(e) => setSuggestion(e)}>
                    <input className="int" type="number" placeholder="?" onInput={(e) => setNumber(parseInt(e.target.value))} />
                    <input  className="submit" type="submit" value="GO!" />
                </form>
                <div>
                    <p>{sugg}</p>
                </div>

        </div>
    )

}

export default Bored