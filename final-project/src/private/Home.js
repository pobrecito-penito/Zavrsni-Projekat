import React from 'react'
import ChosenFacts from './components/ChosenFacts'
import RandomFact from './components/RandomFacts'
import MoreFacts from './components/MoreFacts'
import Converter from './components/Converter'
import Bored from './components/Bored'

const Home = () => {
    return(
        <>
        <ChosenFacts />
        <RandomFact />
        <MoreFacts />
        <Converter />
        <Bored />
        </>
    )
}

export default Home