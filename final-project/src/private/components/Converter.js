import React, { useState } from 'react'
import convert from '../../utility/convert'

const Converter = () => {
    
    const msg = convert(`This message serves to prove how our minds can do amazing things! Impressive things! In the beggining it was hard but now, your mind is reading it automatically without even thinking about it. Isn't that cool? Replacing characters with similar looking numbers is called LEET alphabet (coming from the word ELITE) and it's used primarily on the Internet. Try it for yourself!`);
    const [input,setInput] = useState('');
    const [message,setMessage] = useState(msg);
    const placeholder = convert('Your text here');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input === ''){
            setMessage(msg);
        } else {
            setMessage(convert(input));
            setInput('');
        }
    }

    return(
        <div className="converter">
            <p>{message}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input id="message" value={input} type="text" onInput={(e) => setInput(e.target.value)} placeholder={placeholder} />
                <button type="submit">C0NV3R7!</button>
            </form>
        </div>
    )

}

export default Converter