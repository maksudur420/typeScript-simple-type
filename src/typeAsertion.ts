type one = string;
type two = string|number
type three = 'hello'

// more or less specific

let a:one ='hello'

let b = a as two //less specific
let c = a as one //More specific
// Not  used in React Typescript as type assertion
let d = <string> 'Hello!'
let e = <string|number>'Hello! world'

const addOrConcat =(a:number,b:number,c:'add'|'concat'):string |number =>{
    if (c ==='add') return a+b;
    return ''+ a+b;
}

let myVal:string =addOrConcat(2,3,'concat') as string
// Typescript sees no problem but here returns a String
let nextVal:number =addOrConcat(5,3,'concat') as number

console.log(myVal)
console.log(nextVal);

// 10 as string
(10 as unknown) as string

// Type assertion is more effective in DOM 
let img = document.querySelector('img')!
let myImg = document.getElementById('myImg')as HTMLImageElement
let nextImg = < HTMLImageElement>document.getElementById('myImg')

img.src
myImg.src
nextImg.src