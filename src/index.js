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
    let arrCode = [];
    for (let i = 0; i < expr.length; i = i + 10 ) {
      let elemCode = [(expr.substr(i , 10))];
      arrCode.push(elemCode);
    }
    console.log(arrCode);
  
    let arrMorse = [];
    arrCode.forEach((elem,ind) => {
      arrMorse[ind] = '';
      for (let i = 0; i < 10; i = i + 2 ) {
       let letterCode = (elem[0].substr(i , 2));
          if (letterCode === '10') {
          arrMorse[ind] += '.';
        }
        if (letterCode === '11') {
          arrMorse[ind] += '-';
        }
      }
    });
  const arrletterCode = arrMorse.map(element => MORSE_TABLE[element]);
  const arrletterCode2 =[];
   arrletterCode.forEach((elem )=> {   
                                                                                                                                               
    if(elem === undefined) {
      elem = ' ';
      arrletterCode2.push(elem);
    } else{
      arrletterCode2.push(elem);
    }
  });
  
  return arrletterCode2.join('');
}

module.exports = {
    decode
}