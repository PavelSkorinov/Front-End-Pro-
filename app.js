'use strict'

const $squareList = document.querySelectorAll(".field");


function styleField(el) {
    const changeColor = el.style.backgroundColor;
    if (changeColor === 'green') {
        el.style.backgroundColor = "yellow";
    }
    else if (changeColor === 'blue'){
        el.style.backgroundColor = "green";
    } else {
        el.style.backgroundColor = "blue";
    }
    el.parentNode.appendChild(el);
};

$squareList.forEach(field => {
    field.addEventListener("click", (event) => {
        styleField(event.target)
    })
});

function toggleClass(target, value) {
    let classArr = target.className.split(' ');
    if (classArr.includes(value) ) {
        classArr = classArr.filter(el => el !== value)
    } else {
        classArr.push(value)
    };
    target.className = classArr.join(' ');
};

const $span = document.querySelector(".ff");

toggleClass($span, 'sdsds');
toggleClass($span, 'sdsds');
toggleClass($span, 'sddsadasddasdsa');


