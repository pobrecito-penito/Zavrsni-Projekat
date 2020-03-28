import axios from 'axios'

const baseFactsUrl = 'http://numbersapi.com';

const getFact = async(number,route) => {
    return await axios.get(`${baseFactsUrl}/${number}${route}`);
}

const getRandomFact = async(route) => {
    return await axios.get(`${baseFactsUrl}/random/${route}`)
}

const getSuggestion = async(number) => {
    return await axios.get(`https://www.boredapi.com/api/activity?participants=${number}`);
}

export { getFact, getRandomFact, getSuggestion }