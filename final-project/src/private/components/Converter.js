import React, { useState } from 'react'
import convert from '../../utility/convert'

const Converter = () => {
    
    const msg = convert(`This message serves to prove how our minds can do amazing things! Impressive things! In the beggining it was hard but now, your mind is reading it automatically without even thinking about it. Isn't that cool? Replacing characters with similar looking numbers is called LEET alphabet (coming from the word ELITE) and it's used primarily on the Internet. Try it for yourself!`);
    const [input,setInput] = useState('');
    const [message,setMessage] = useState(msg);
    const placeholder = convert('Your text here');
    const [msgs,setMsgs] = useState([msg]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input !== ''){
            setMessage(convert(input));
            setInput('');
            setMsgs([...msgs,(convert(input))]);
        }
    }

    const handleBack = () => {
        let index = msgs.findIndex(el => el === message);
        if(index !== 0) {
            setMessage(msgs[index-1]);
        }
    }

    const handleForward = () => {
        let index = msgs.findIndex(el => el === message);
        if(index !== msgs.length - 1){
            setMessage(msgs[index+1]);
        }
    }

    return(
        <div className="converter">
            <div className="btns">
                <button onClick={() => handleBack()}>←</button>
                <button onClick={() => handleForward()}>→</button>
            </div>
            <div className="msg">
            <p>{message}</p>
            </div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <input id="message" value={input} type="text" onChange={(e) => setInput(e.target.value)} placeholder={placeholder} />
                <button type="submit">C0NV3R7!</button>
            </form>
        </div>
    )

}

export default Converter