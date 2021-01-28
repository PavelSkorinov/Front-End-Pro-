'use strict'

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

ctx.fillStyle = 'white';

const drawCircle = (x, y, radius) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
};
drawCircle(canvas.width / 2, 150, 50)
drawCircle(canvas.width / 2, 270, 80)
drawCircle(canvas.width / 2, 420, 120)

ctx.fillStyle = 'black';
drawCircle(canvas.width / 2 - 15, 130, 7)
drawCircle(canvas.width / 2 + 15, 130, 7)

ctx.beginPath();
ctx.arc(canvas.width / 2, 170, 7, 0, Math.PI);
ctx.fill();

const armConfigLeft = {
    xFrom: canvas.width / 2 - 80,
    yFrom: 270,
    xTo1: canvas.width / 2 - 140,
    yTo1: 340,
    xTo2: canvas.width / 2 - 160,
    yTo2: 330,
    xTo3: canvas.width / 2 - 155,
    yTo3: 360,
    xTo4: canvas.width / 2 - 130,
    yTo4: 360
};

const armConfigRight = {
    xFrom: canvas.width / 2 + 80,
    yFrom: 270,
    xTo1: canvas.width / 2 + 140,
    yTo1: 340,
    xTo2: canvas.width / 2 + 160,
    yTo2: 330,
    xTo3: canvas.width / 2 + 155,
    yTo3: 360,
    xTo4: canvas.width / 2 + 130,
    yTo4: 360
};

ctx.strokeStyle = "black";

const drawArms = (config) => {
    const { xFrom, yFrom, xTo1, yTo1, xTo2, yTo2, xTo3, yTo3, xTo4, yTo4 } = config;
    ctx.beginPath();
    ctx.moveTo(xFrom, yFrom)
    ctx.lineTo(xTo1, yTo1)
    ctx.lineTo(xTo1, yTo1)
    ctx.lineTo(xTo2, yTo2)
    ctx.lineTo(xTo1, yTo1)
    ctx.lineTo(xTo3, yTo3)
    ctx.lineTo(xTo1, yTo1)
    ctx.lineTo(xTo4, yTo4)
    ctx.stroke();
};

drawArms(armConfigLeft);
drawArms(armConfigRight);



