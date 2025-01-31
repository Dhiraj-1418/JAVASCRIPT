

// WAP of swaping of two variables without using =,- operator

let x=prompt("Enter the value of x");
let y=prompt("Enter the value ofy");

document.write("\nIn first the value of x is = ",x);
document.write("\nIn first the value of y is = ",y);

x=x*y;
y=x/y;
x=x/y;

document.write("\nAfter swapping the value of x is = ",x);
document.write("\nAfter swapping In first the value of y is = ",y);