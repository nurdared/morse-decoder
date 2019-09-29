const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = expr.match(/(.{1,10})/g);                                               //divide by length 10
    for(let element of array) {
        array[array.indexOf(element)] = parseInt(element)
                                            .toString()                                 //to delete zeros at the beginning
                                            .match(/(.{1,2})/g)                         //divide by pairs
                                            .map(value => {
                                                if(value === '10')
                                                    return '.'
                                                else if (value === '11')
                                                    return '-'
                                                else  {
                                                    return '+'                          //replace 'Na' and 'N' with "+"
                                                }
                                            })                                          //change pairs to '.' or '-'
                                            .join('');                                  //join pairs together 
    }

    //to Change symbols to single Word or ++ to space ' '
    for (let element in array){
        for(let key in MORSE_TABLE){
            if(array[element] === key)
                array[element] = MORSE_TABLE[key]
            else if (array[element] === '++')
                array[element] = ' '

            
        }
    }                              
    //Join Words into sentence and return it
    return array.join('');
}

module.exports = {
    decode
}


