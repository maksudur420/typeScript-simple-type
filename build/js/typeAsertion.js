"use strict";
// more or less specific
let a = 'hello';
let b = a; //less specific
let c = a; //More specific
// Not  used in React Typescript as type assertion
let d = 'Hello!';
let e = 'Hello! world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
// Typescript sees no problem but here returns a String
let nextVal = addOrConcat(5, 3, 'concat');
console.log(myVal);
console.log(nextVal);
// 10 as string
10;
// Type assertion is more effective in DOM 
let img = document.querySelector('img');
let myImg = document.getElementById('myImg');
let nextImg = document.getElementById('myImg');
img.src;
myImg.src;
nextImg.src;
