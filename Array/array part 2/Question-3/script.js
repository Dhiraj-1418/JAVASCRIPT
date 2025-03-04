let numbers = [ 85 , 75 ,25 ,10 ,95]
let minimum; 
minimum = numbers[0]; 

for(let i=0; i<numbers.length; i++)
{
    if(numbers[i] < minimum)
    {
        minimum = numbers[i]
    }
}
document.write("The minimum number in :-  " +  minimum);