let sum = function(initial) {
    let def = initial;

    return function (count) {
        def += count;
        return def;
    };
};

let result = sum(0);

// console.log(result(3));
// console.log(result(3));
// console.log(result(8));

function createCounter(startValue, stepValue) {
    let count = startValue;
    const step = stepValue;
    return function (reset = false) {
        if (reset) {
            count = startValue;
        } else {
            count += step;
        };
        return count;
    };
};

const counter = createCounter(12, 20);

console.log(counter());
console.log(counter(true));
console.log(counter());
console.log(counter(true));