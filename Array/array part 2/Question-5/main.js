


let userNum=[];


let arrayInputLength= prompt("Enter array length=");


for(i=0; i<arrayInputLength; i++){
    userNum[i]=parseInt(prompt("Enter number:"));
}
// for(let j=0; j<arrayInputLength; j++){
//     document.write(userNum[j]+ " ");
// }

document.write(userNum.length);

for(let i=0; i<=userNum.length; i++)
{
    for(let j=i+1; j<=userNum.length; j++)
    {
        if(userNum[i] > userNum[j]);
        {
             let temp = userNum[i]
             userNum[i] = userNum[j]
             userNum[j] = temp 
        }
    }
}

document.write("Ascending order :-   " + "  " + userNum)



// let arrayInputLength= prompt("Enter array length=");
// let userNum=[];

// for(i=0; i<arrayInputLength; i++){
//     userNum[i]=parseInt(prompt("Enter number:"));
// }
// for(let j=0; j<arrayInputLength; j++){
//     document.write(userNum[j]+ " ");
// }