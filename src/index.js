var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var person = /** @class */ (function () {
    function person(fn, ln) {
        this.fn = fn;
        this.ln = ln;
    }
    return person;
}());
var person1 = /** @class */ (function (_super) {
    __extends(person1, _super);
    function person1(fn, ln, age) {
        var _this = _super.call(this, fn, ln) || this;
        _this.age = age;
        return _this;
    }
    person1.prototype.getDetails = function () {
        return "".concat(this.fn, " ").concat(this.ln, " and my age is ").concat(this.age);
    };
    return person1;
}(person));
var p2 = new person1('hello', 'mln', 24);
console.log(p2.getDetails());
