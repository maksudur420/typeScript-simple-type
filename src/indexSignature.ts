// Index signature
    // interface TransctionObj {
    //   readonly  [index:string]:number
    // }
interface TransctionObj {
    readonly  [index:string]:number
    Pizza :number,
    Books:number,
    Job:number
}

const todaysTransaction : TransctionObj ={
    Pizza: -10,
    Books:-5,
    Job:50,
    Maksud:32
}

// todaysTransaction.Pizza =40
// console.log(todaysTransaction['Maks'])

// console.log(todaysTransaction.Pizza)
// console.log(todaysTransaction['Pizza'])

// let prop:any ='Pizza';

//console.log(todaysTransaction[prop])

const todaysNet =(transactions:TransctionObj):number=>{


    let total = 0
   for (const transaction in transactions) {

        // console.log(transaction)
        total += transactions[transaction]
   }
   return total;
}

// console.log(todaysNet(todaysTransaction))

// ////////////////////////////////////////////

interface Student {
    // [key:string |number]:string|number|number[]|undefined
    name:string;
    GPA: number;
    classes?: number[]
}
const student:Student ={
    name:'Maksudur',
    GPA:3.5,
    classes:[100,50]
}
//console.log(student.test=10)
console.log(student)

// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key=>{
    console.log(`${key}:${student[key as keyof typeof student]}`)
})

const logStudentKey =(student:Student, key: keyof Student)=>{
    console.log(`Student ${key}:${student[key]}`)
}


logStudentKey(student,'GPA')
logStudentKey(student,'name')