// first letter is lowercase
// the rest are uppercase
// tHE qUICK bROWN fOX'

let string = 'The Quick Brown Fox'
function caseSwap(string){
    word =string.split('');
    return word.map( i => {
        return i[0].tolowercase() +(i.slice(1)).touppercase()
    }).join("");
}console.log(caseSwap(string))