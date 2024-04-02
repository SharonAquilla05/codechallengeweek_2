// first letter is lowercase
// the rest are uppercase
// tHE qUICK bROWN fOX'

let text = 'The Quick Brown Fox'
function caseSwap(text){
    word =text.split('');
    return word.map( i => {
        return i[0].tolowercase() +(i.slice(1)).touppercase()
    }).join("");
}console.log(caseSwap(text))
