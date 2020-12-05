function getValues(obj) {
    var result = [];
    for(key in obj) {
        result.push(obj[key])
    };
    return result;
};

// var object = {
//     name: "Toha",
//     surname: "Antoha",
//     age: 21
// }

// console.log(getValues(object))



function getKeys(obj) {
    var result = [];
    for(key in obj) {
        result.push(key)
    };
    return result;
};

// var object = {
//     name: "Toha",
//     surname: "Antoha",
//     age: 21
// }

// console.log(getKeys(object))



function getEntries(obj) {
    var resultArray = [];
    for(var key in obj) { 
        resultArray.push([key, obj[key]]);
    };
    return resultArray;
};

// var object = {
//     name: "Toha",
//     surname: "Antoha",
//     age: 21
// }

// console.log(getEntries(object))




