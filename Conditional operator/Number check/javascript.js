let a = prompt("Enter the value of a :");

a =parseInt(a);

if(a==0)
{
    document.write(`${a} is a Neutral number`);
}

else if(a%2==0  )
{
    document.write(`${a} is a Even number`);
}
else if(a%2==1)
{
    document.write(`${a} is a Odd number`);
}
else if(a<0)
    {
        document.write(`${a} is a Negative number`);
    }
else
{
    document.write("Enter valid number!");
}
