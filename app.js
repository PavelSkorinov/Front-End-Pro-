let bind = function(fn, context) {
    const arr = []
    for (let i = 2; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    return function() {
        const arr2 = []
        for (let i = 0; i < arguments.length; i++) {
            arr2.push(arguments[i])
        }
       return fn.apply(context, arr.concat(arr2));
    };
}


const user = {
    name: "Anton"
};

function userInfo(surname, age) {
    console.log(`Name: ${this.name}, Surname: ${surname}, Age: ${age}`);
}

// userInfo.bind(user, 'Hanton', '22')()

bind(userInfo, user, 'Hanton', '22')();