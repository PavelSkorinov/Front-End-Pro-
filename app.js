let bind = function(fn, context) {
    const rest = Array.prototype.slice.call(arguments, 2);
    return function() {
        const args = Array.prototype.slice.call(arguments);
       return fn.apply(context, rest);
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