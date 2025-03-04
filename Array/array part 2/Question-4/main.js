let numbers = [ 856 , 750 ,250 ,104 ,955]
let minimum; 
minimum = numbers[0]; 

for(let i=0; i<numbers.length; i++)
{
    if(numbers[i] > minimum)
    {
        minimum = numbers[i]
    }
}
document.write("The maximum number in :-  " +  minimum);