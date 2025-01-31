let  per = prompt("Enter your Percantage to Avail your grade!");

per=parseInt(per);

if(per<=0 || per>=100)
{
    document.write("Enter valid Percentage");
}
else if(per>=90 && per<=100)
{
    document.write("Congrats You got A grade!");
}
else if(per>=70 && per<90)
{
    document.write("Congrats You got B grade!");
}
else if(per>=60 && per<=70)
    {
        document.write("Congrats You got C grade!");
    }
    else if(per>=33 && per<60)
    {
        document.write("Congrats You got D grade!");
    }
    else  if(per>=0 && per<=33){
        document.write("You got E grade!");
    }
    else
    {
        document.write("Enter valid percentage!")
    }
