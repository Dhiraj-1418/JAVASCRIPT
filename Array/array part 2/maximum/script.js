let userNum=[];


let arrayInputLength= prompt("Enter array length :");


for(i=0; i<arrayInputLength; i++){
    userNum[i]=parseInt(prompt("Enter number :"));
}

let minNum;
minNum = userNum[0];

for (let i = 0; i < userNum.length; i++) {
  if (userNum[i] > minNum) {
    minNum = userNum[i];
  }
}
document.write(`${minNum} is the maximum value among these values ${userNum} `);

