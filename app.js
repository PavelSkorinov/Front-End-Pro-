function cylinder(radius, height) {
    let square = 2 * Math.PI * radius * height
    let volume = square * height
    let squareCorrect = square.toFixed(2)
    let volumeCorrect = volume.toFixed(2)
    alert("Площадь цилиндра - " + squareCorrect) 
    alert("Объем цилиндра - " + volumeCorrect)
};

// cylinder(6, 6);


function getResult(firstNum, secNum, symbol) {
    if (symbol == "+") {

        alert(firstNum + secNum);

    } else if (symbol == "-") {

        alert(firstNum - secNum);

    } else if (symbol == "*") {

        alert(firstNum * secNum);

    } else if (symbol == "**") {

        alert(firstNum ** secNum);

    } else if (symbol == "/") {

        alert(firstNum / secNum);

    }
};

// getResult(2, 4, "**");


function isCharPresent(str, symbol) {
    if (str.search(symbol) != -1) {
        alert(true);
    } else {
        alert(false);
    }
}

// isCharPresent("Da", "9");


function charIndexOf(str, symbol) {
    if (str.search(symbol) != -1) {
        alert(symbol);
    } else {
        alert(-1);
    };
}

// charIndexOf("Anton", "o");