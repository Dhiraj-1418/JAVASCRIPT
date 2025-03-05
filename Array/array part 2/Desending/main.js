let userNum=[];


let arrayInputLength= prompt("Enter array length :");


for(i=0; i<arrayInputLength; i++){
    userNum[i]=parseInt(prompt("Enter number :"));
}

document.write("User input order :-   " + "  " + userNum + "<br>")


for(let i=0; i<=userNum.length; i++)
{
    for(let j=0; j<=userNum.length; j++)
    {
        if(userNum[i] > userNum[j])
        {
             let temp = userNum[i];
             userNum[i] = userNum[j];
             userNum[j] = temp ;
        }
    }
}

document.write("Descening order of the array is :-   " + "  " + userNum)
