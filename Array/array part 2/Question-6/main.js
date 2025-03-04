let digits = [54, 94 ,51 ,32 ,10 ,40 ,2 ,6 ,3,]

for(let i=0; i<=digits.length; i++)
{
    for(let j=0; j<=digits.length; j++)
    {
        if(digits[i] > digits[j])
        {
             let temp = digits[i]
             digits[i] = digits[j]
             digits[j] = temp 
        }
    }
}

document.write("Descening order of the array is :-   " + "  " + digits)
