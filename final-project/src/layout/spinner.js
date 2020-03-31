import React from 'react'
import loading from '../assets/cats.gif'

const Spinner = () => {
    return(
        <img src={loading} alt="Loading..." style={{width: "400px", height: "100px", margin: "auto", display: "block", border_radius: "15px"}} />
    )
}

export default Spinner