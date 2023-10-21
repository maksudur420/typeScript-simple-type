"use strict";
// Raw JavaScript code
// const year = document.getElementById('year')!;
// const thisYear = new Date().getFullYear();
// year.setAttribute('datetime',thisYear);
// year.textContent= thisYear;
// Variation with ts
// let year: HTMLElement|null = document.getElementById('year');
// console.log(year)
// const thisYear = new Date().getFullYear().toString();
// if (year) {
//     year.setAttribute('datetime',thisYear);
//     year.textContent= thisYear;
// }
// more specific with type assertion
let year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
