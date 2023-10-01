"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
const resultNum = [];
const resString = [];
function printResult(resObject) {
    console.log(resObject.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    resultNum.push(result);
    const resStr = add(num1, num2);
    resString.push(resStr);
    printResult({ val: result, timestamp: new Date() });
    console.log(resultNum, resStr);
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It Worked");
    }, 1000);
});
promise.then((result => console.log(result.split('W'))));
