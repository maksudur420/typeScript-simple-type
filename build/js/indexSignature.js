"use strict";
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Maksud: 32
};
// todaysTransaction.Pizza =40
// console.log(todaysTransaction['Maks'])
// console.log(todaysTransaction.Pizza)
// console.log(todaysTransaction['Pizza'])
// let prop:any ='Pizza';
//console.log(todaysTransaction[prop])
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        // console.log(transaction)
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: 'Maksudur',
    GPA: 3.5,
    classes: [100, 50]
};
//console.log(student.test=10)
console.log(student);
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(`${key}:${student[key]}`);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}:${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
