let k:number=100;
function prod(a:number,b:number)
{
    return a*b;
}

class emp
{
    fn:string;
    ln:string;
    sal:number;
    constructor(fn:string,ln:string,sal:number)
    {
        this.fn=fn;
        this.ln=ln;
        this.sal=sal;
        
    }
    getData()
    {
        return `${this.fn} ${this.ln}'s salary is ${this.sal}`
    }
}
export {k,prod,emp}