function calcCylinder(radius, height) {
    var square = 2 * Math.PI * radius * height;
    var volume = square * height;
    var cylinder = {
        square: square.toFixed(2),
        volume: volume.toFixed(2)
    }

    return cylinder

};

// console.log(calcCylinder(6, 6));



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