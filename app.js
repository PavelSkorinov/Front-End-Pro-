function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

function binariesSearch(numberToFind, arr) {
    if (!arr.length) {
        return  null;
    }

    let middle = Math.floor(arr.length - 1 / 2);


    if (arr.length === 1 && arr[0] !== numberToFind) {
        return false;
    }

    if (numberToFind === arr[middle]) {
        return middle;
    } else if (numberToFind < arr[middle]) {
        return binariesSearch(numberToFind, arr.splice(0, middle));
    } else if (numberToFind > arr[middle]) {
        return binariesSearch(numberToFind, arr.splice(middle));
    }
}

const array = [1, 2, 3, 4, 5, 6, 7]

console.log(reverseString("Hello Anatoliy"));
console.log(binariesSearch(5, array));
``