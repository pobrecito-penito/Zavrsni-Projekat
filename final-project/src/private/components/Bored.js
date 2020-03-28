import React, { useState } from 'react'
import { getSuggestion } from '../../services/api.service';

const Bored = () => {

    const [number, setNumber] = useState('');
    const [sugg,setSugg] = useState('');

    const setSuggestion = (e) => {
        e.preventDefault();

        getSuggestion(number+1).then(res => {
            if(number === 0){
                setSugg(`Oops, we are sorry that you don't have any friends :( Don't worry, you can always ${res.data.activity.toLowerCase()}!`);
            } else if(number >= 1 && number < 5){
                setSugg(`${res.data.activity}!`)
            } else {
                setSugg(`Come on, we know you don't have that many friends!`)
            }
        })

        // if(number == 0){
        //     getSuggestion(number+1).then(res => {
        //         setSugg(`Oops, we are sorry that you don't have any friends :( Don't worry, you can always ${res.data.activity.toLowerCase()}!`);
        //         console.log(res);
        //     }) else if(number >= 1 && number < 6){
        //         setSuggestion(`${res.data.activity}!`)
        //     }
        // }
    }

    return(
        <div className="bored">
            <p>Still bored? Let's find you something to do! Tell us how many friends you have and we'll give you a suggestion →
                <form onSubmit={(e) => setSuggestion(e)}>
                    <input type="number" placeholder="?" onInput={(e) => setNumber(parseInt(e.target.value))} />
                    <input type="submit" value="GO!" />
                </form>
                <p>{sugg}</p>
            </p>
        </div>
    )

}

export default Bored