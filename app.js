var cylinder = {
    radius: 6,
    height: 8,
    square: function(radius, height) {
        return (2 * Math.PI * radius * height).toFixed(2);
    },
    volume: function(square, height) {
        return (square * height).toFixed(2);
    }    
};


function getResult(firstNum, secNum, symbol) {
    if (symbol == "+") {

        return firstNum + secNum;

    } else if (symbol == "-") {

        return firstNum - secNum;

    } else if (symbol == "*") {

        return firstNum * secNum;

    } else if (symbol == "**") {

        return firstNum ** secNum;

    } else if (symbol == "/") {

        return firstNum / secNum;

    }
};

// console.log(getResult(2, 4, "**"));


function isCharPresent(str, symbol) {
    for ( i = 0; i < str.length; i++) {
        if (str.startsWith(symbol, i) == true) {
            return true
        }
    };   
    return false 
}

// console.log(isCharPresent("Da", "u"));


function charIndexOf(str, symbol) {
    for ( i = 0; i < str.length; i++) {
        if (str.startsWith(symbol, i) == true) {
            return i
        }
    };   
    return -1 
}

// console.log(charIndexOf("Bomba", "d"));

  