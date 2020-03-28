
const convert = (sentence) => {
    
    let characters = sentence.toUpperCase().split('');
    
    let transformedChars = characters.map(el => {
        switch(el){
            case 'A': return '4';
            case 'E': return '3';
            case 'I': return '1';
            case 'O': return '0';
            case 'S': return '5';
            case 'T': return '7';
            default: return el;
        }
    })
    
    let transformedSentence = transformedChars.join('');

    return transformedSentence
}

export default convert