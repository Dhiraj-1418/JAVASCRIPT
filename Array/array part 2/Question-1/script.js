let userName = prompt("Enter any name to check wether it is palindrome or not : ");
let revName = "";

for (let i = userName.length - 1; i >= 0; i--) {
  revName += userName[i];
}

document.write(`The reverse order of th name is ${revName} and it `)


if (revName == userName) {
  document.write(userName + " is a palindromic name !");
} else {
  document.write(userName + " is not a palindromic name !");
}
