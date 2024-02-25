let k = 100;
function prod(a, b) {
    return a * b;
}
class emp {
    constructor(fn, ln, sal) {
        this.fn = fn;
        this.ln = ln;
        this.sal = sal;
    }
    getData() {
        return `${this.fn} ${this.ln}'s salary is ${this.sal}`;
    }
}
export { k, prod, emp };
