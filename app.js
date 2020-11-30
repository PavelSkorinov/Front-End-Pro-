function padString(str, length, symbol, toStart = false) {
    var resultString = str
    if(str.length < length) {
        var repeatedString = symbol.repeat(length - str.length);
        if (toStart === true) {
            resultString = repeatedString + resultString;
        } else {
            resultString = resultString + repeatedString;
        }
       
    }   
    return resultString; 
};

console.log(padString('Toha', 8, '*', true));