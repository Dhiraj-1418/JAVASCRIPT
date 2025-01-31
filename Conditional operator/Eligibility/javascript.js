let age= prompt("Enter your age:");

age=parseInt(age);

if(age>=18)
{
    document.write("You are eligible for vote!");
}
else if(age<=0 || age>100)
{
    document.write("<br>Enter your valid age!");
}
else if (age<=18){
    document.write("<br>You are not elligible for vote!");
}
else 
{
    document.write("Enter your valid age!");
}