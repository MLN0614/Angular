/*function add(a:number,b:number):number
{
    return a+b;
}
console.log(add(3,5))*/
/*
type sum=(a:number,b:number)=>number
const add:sum=(x,y)=>{return x+y}
console.log(add(3,6));
*/
/*
type num=(a:number,b:number)=>number
const sum:num=(a,b)=>{return a+b}
const dif:num=(a,b)=>{return a-b}
console.log(sum(2,6))
console.log(dif(3,1))
*/
/*
type str=(a:string,b:string)=>string
const sum:str=(a,b)=>{return a+b}
const dif:str=(a,b)=>{return a.toUpperCase()+b.toLowerCase()}
console.log(sum('hello',' mln'))
console.log(dif('hello' , ' mln'))
*/
/*
class Human
{
    name:string
    constructor(n:string)
    {
        this.name=n;
    }
}
const p1=new Human('chintu')
console.log(p1.name);
*/
/*
class person
{
    fn:string
    ln:string
    constructor(fn:string,ln:string)
    {
        this.fn=fn
        this.ln=ln
    }
}
class person1 extends person
{
    age:number
    constructor(fn:string,ln:string,age:number)
    {
        super(fn,ln)
        this.age=age
    }
    getDetails()
    {
        return `${this.fn} ${this.ln} and my age is ${this.age}`
    }
}
const p2= new person1('hello','mln',24);
console.log(p2.getDetails())
*/
/*
class circle
{
    static pi=3.14;
    pi=10;
}
const p=new circle()
console.log(p.pi)
console.log(circle.pi)
*/
