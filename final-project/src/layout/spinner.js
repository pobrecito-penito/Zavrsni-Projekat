import React from 'react'
import loading from '../assets/cats.gif'
import loading1 from '../assets/cat.gif'
import loading2 from '../assets/cat1.gif'

export const Spinner = () => {
    return(
        <img id="loader" src={loading} alt="Loading..." style={{width: "500px", height: "150px", margin: "auto", display: "block"}} />
    )
}

export const Spinner1 = () => {
    return(
        <img id="loader" src={loading1} alt="Loading..." style={{width: "380px", height: "200px", margin: "auto", display: "block"}} />
    )
}

export const Spinner2 = () => {
    return(
        <img src={loading2} alt="Loading..." style={{width: "500px", height: "250px", margin: "auto", display: "block"}} />
    )
}