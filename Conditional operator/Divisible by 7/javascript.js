let a = prompt("Enter the value of a :");

a = parseInt(a);

qou = a/7;

rem = a%7;

if(a%7==0 || -a%7==0)
{
    document.write(`${a} is Divisible by 7!`);
    document.write("<br>The qoutinet is ",qou);
    document.write("<br>The reminder is ",rem);
}
else if(a%7!=0)
{
    document.write(`${a} is not Divisible by 7!`);
    document.write("<br>The qoutinet is ",qou);
    document.write("<br>The reminder is ",rem);
}
else{
    document.write("Enter Only Numbers!");
}