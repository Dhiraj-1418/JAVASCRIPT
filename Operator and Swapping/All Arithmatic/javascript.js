//  WAP to perform arthmatic programm

let a=prompt("Enter the value of a");
let b=prompt("Enter the value of b")

a=parseInt(a);
b=parseInt(b);

let sum = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let mod = a%b;
let sqr = a**b;

document.write(`The sum of ${a} + ${b} is =`,sum );
document.write(`<br>The Substraction of ${a} - ${b} is =`,sub);
document.write(`<br>The multiplication of ${a} x ${b} is =`,mul);
document.write(`<br>The division of ${a} / ${b} is =`,div);
document.write(`<br>The modulo of ${a} % ${b} is =`,mod);
document.write(`<br>The power of ${a} sqr ${b} is =`,sqr);