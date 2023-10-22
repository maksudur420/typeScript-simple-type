class Coder{

    seconsLang!:string;

    constructor(
       public readonly name:string,
       public music:string,
        private age:number,
        protected lang:string='Typescript'
        )
        {
        this.name=name;
        this.music=music;
        this.age=age;
        this.lang=lang;

    }

    public getAge(){
        return `${this.name} is ${this.age}`
    }
}


class webDev extends Coder{
    constructor(
        public computer:string,
        name:string,
        music:string,
        age:number
        ){
            super(name,music,age)
            this.computer=computer;
    }

    getLang(){
        return `I am expert in ${this.lang}`
    }
}

const maksud = new Coder('Maksudur','Pop',32);

console.log(maksud.name)
console.log(maksud.music)
console.log(maksud.getAge())
// console.log(myCoding.lang)

const nitta = new webDev('Mac','Nitta','Rock',31)



console.log(nitta.name)
console.log(nitta.computer)
console.log(nitta.music)
console.log(nitta.getAge())
console.log(nitta.getLang())

// ///////////////////////////////////////////

class Peeps{
    static count: number =0;

    static getCount():number{
        return Peeps.count;
    }

    public id : number ;

    constructor(public name:string){
        this.name=name;
        this.id= ++Peeps.count
    }
}

const Maks =new Peeps('Maks')
const Dev =new Peeps('Dev')
const Roc =new Peeps('Roc')
console.log(Maks.id)
console.log(Dev.id)
console.log(Roc.id)
console.log(Peeps.getCount())
// TypeScript getter and setter 

class Bands {
    private dataState:string[];

    constructor(){
        this.dataState =[]
    }

    public get mydata():string[]{
        return this.dataState;
    }

    public set data(value:string[]){
        if (Array.isArray(value) && value.every(el=> 
            typeof el ==='string')) {
            this.dataState=value;
            return
        }else{
            throw new Error('This parameter is not array of string')
        }
    }
}


const myBands = new Bands()

myBands.data = ['Maksud','Rita','Mike','David']
console.log(myBands.mydata)
myBands.data =[...myBands.mydata,'nitta','micheal','jibon'];
console.log(myBands.mydata)

// console.log(nitta.age)
// console.log(nitta.lang)

// interface nameClass{
//     name:string;
//     age:number;
//     bands:string;
//     everySinger(): string
// }

class Singer {
    name:string="nazmul";
    age:number=33;
    bands:string='classic';

    constructor(name:string,age:number,bands:string){
        this.name =name
        this.age =age
        this.bands =bands
    }

    everySinger(): string{
        return `${this.name} Singrer singing this ${this.bands}`
    }
}

class myBand extends Singer{
    
    constructor(name:string,age:number,bands:string){
        super(name,age,bands)
        
    }
   
   
}
const mysin = new Singer('Maksudur',32,'rocks')

const band =new myBand("Rita",22,'adhunik')

console.log(band.everySinger())

// console.log(mysin.everySinger())