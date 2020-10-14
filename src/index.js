const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
//declaring variables. Solving step by step.
    let
        morseWord = [], // for dividing string  to letters in digits
        morseSign = [], // for storage  letters in '.' and '-'
        morseLetter = [], // for storage  letters in array

        k = 0;

    for (let i = 0; i < expr.length; i += 10) {
        morseWord[k] = expr.slice(i, i + 10);
        morseSign[k] = '';
        k++;
    }

    // console.log(morseWord); //debug: show array

    for (let i = 0; i < morseWord.length; i++) {
        if (morseWord[i] == '**********') {
            morseLetter[i] = ' ';

        } else {
            for (let j = 0; j < morseWord[i].length; j += 2) {
                if (morseWord[i].slice(j, j + 2) == '10') {
                    morseSign[i] += '.';
                } else if (morseWord[i].slice(j, j + 2) == '11') {
                    morseSign[i] += '-';
                }
                //          
                morseLetter[i] = MORSE_TABLE[morseSign[i]];

            }

        }
        // console.log(morseLetter[i])//debug: show letter
    }
    // console.log(morseLetter);

    return morseLetter.join('');
}


module.exports = {
    decode
}