"use strict";
// Literal Types
let myName;
let userName;
userName = 'David';
// Function defination 
let add = (a, b) => {
    return a + b;
};
let logMsg = (message) => {
    console.log(message);
};
// logMsg(add(2,5))
// logMsg(add(10,5))
//logMsg(add('10',5))
let substraction = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a:number,b:number):number
// }
let multiplyFun = (c, d) => {
    return c * d;
};
// logMsg(multiplyFun(8,12))
// optional Parameter
let addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default value assaign
let addNum = (a = 10, b, c = 2) => {
    return a + b + c;
};
// logMsg(addAll(3,5,4))
// logMsg(addAll(3,5))
// logMsg(addNum(6,5))
// logMsg(addNum(undefined,5))
// rest Parameter
const sumAll = (a, ...nums) => {
    return a + nums.reduce((previousValue, currentValue) => previousValue + currentValue);
};
logMsg(sumAll(1, 3, 5));
// never Type defination
