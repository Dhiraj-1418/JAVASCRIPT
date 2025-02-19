function add(num1,num2){
    document.write(num1 + "  + " + num2 + " = " + (num1+num2) + "<br>");
}
function sub(num1,num2){
    document.write(num1 + "  - " + num2 + " = " + (num1-num2)+ "<br>");
}
function multiply(num1,num2){
    document.write(num1 + "  * " + num2 + " = " + (num1*num2)+ "<br>");
}
function divide(num1,num2){
    document.write(num1 + "  / " + num2 + " = " + (num1/num2)+ "<br>");
}
function modul(num1,num2){
    document.write(num1 + "  % " + num2 + " = " + (num1%num2)+ "<br>");
}

let num1=prompt("Enter first value:");
let num2=prompt("Enter second value:");

num1=parseInt(num1);
num2=parseInt(num2);





let choice=prompt("Enter your operator choice:");

switch(choice){
        case "+": add(num1,num2 );break;
        case "-": sub(num1,num2);break;
        case "*": multiply(num1,num2);break;
        case "/": divide(num1,num2);break;
        case "%": modul(num1,num2);break;
        default: document.write("Enter the valid operator sign among : +,-,*,/,%");
    
}