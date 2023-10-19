"use strict";
//let myName ="Maksudur Rahman"
// let myName:string;
// myName = "surma Rita";
// myName = "Maksudur Rahman"
// console.log(myName)
let stringArr = ['Maksud', 'Rita', 'Mike', 'David'];
// let mixedArr: (number|string|boolean)[] = ['Micheal',42,true];
let doubleArr = ['Mak', 'Khalid', 1884];
stringArr[0] = 'Deva';
stringArr.push("Nazmul");
// mixedArr[0]= 'devid'
// mixedArr.push(1984)
// mixedArr.push(false)
// Not assaign able stringArr = mixedArr\
// mixedArr = [...mixedArr,...stringArr,...doubleArr];
let test = [];
let bands = [];
bands.push("Vander Dussen");
bands.push("Aden");
// Tuples definations 
let myTuples = ['Maksudur', 33, true];
let mixedArr = ['Micheal', 42, false];
// myTuples[2]="Quinton Decock"
// myTuples =mixedArr;
mixedArr = myTuples;
console.log(mixedArr);
// Objects 
let myObj;
myObj = [];
console.log(myObj);
myObj = bands;
myObj = {};
let exmpleObj = {
    prop1: "Maksud",
    prop2: true
};
let evh = {
    name: "Maksud",
    isActive: false,
    albums: [1984, 5150, 'may']
};
let jp = {
    name: "jimmy",
    isActive: true,
    albums: ['One', 'Two', 'Four']
};
// evh =jp;
let greetungBands = (guiterist) => {
    if (guiterist.name) {
        return `Hello! ${guiterist.name.toUpperCase()}`;
    }
    return `Hello!!`;
};
console.log(greetungBands(jp));
