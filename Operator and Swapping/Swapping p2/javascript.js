// WAP of swaping of two variables without using third variable


let a=prompt("Enter the value of a");
let b=prompt("Enter the value of b");

document.write("<br>In first the value of a is = ",a);
document.write("<br>In first the value of b is = ",b);
 a=parseInt(a);
 b= parseInt(b);
a= a + b;
b = a - b;  
a = a - b;


document.write("<br>After swapping the value of a is = ",a);
document.write("<br>After swapping the value of b is = ",b);

