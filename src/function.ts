// type Alias
type stringOrNumber = string|number
type stringOrNumberArr =(string |number)[]

type Guiterist ={
    name ?: string,
    isActive: boolean,
    albums: stringOrNumberArr
}

type userId = stringOrNumber

// Literal Types

let myName:'Maksudur';

let userName:'Jhon' | 'deva'|'Mike'|'David';

userName = 'David';

// Function defination 

let add =(a:number,b:number):number=>{
    return a+b ;
}

let logMsg =(message:any):void=>{
    console.log(message)
}

// logMsg(add(2,5))
// logMsg(add(10,5))
//logMsg(add('10',5))

let substraction = function (c:number,d:number):number{
    return c-d;
}

type mathFunction =(a:number,b:number)=>number
// interface mathFunction {
//     (a:number,b:number):number
// }

let multiplyFun: mathFunction =(c,d)=>{
    return c*d;
}

// logMsg(multiplyFun(8,12))

// optional Parameter

let addAll =(a:number,b:number,c?:number):number=>{
    if (typeof c !=='undefined') {
        return a+b+c;
    }
    return a+b
   
}

// default value assaign

let addNum =(a:number=10,b:number,c:number=2):number=>{
    
    return a+b+c
   
}

// logMsg(addAll(3,5,4))
// logMsg(addAll(3,5))
// logMsg(addNum(6,5))
// logMsg(addNum(undefined,5))

// rest Parameter

const sumAll =(a:number,...nums:number[])=>{
    return a + nums.reduce((previousValue, currentValue) =>previousValue + currentValue)
}

logMsg(sumAll(1,3,5))

// never Type defination
