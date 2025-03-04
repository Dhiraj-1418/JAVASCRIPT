let userName = prompt("Enter any Name to check Frequency : ");
let count;

for (let i = 0; i < userName.length; i++) {
  count = 0;

  for (j = 0; j <= userName.length; j++) {
    if (userName[i] == userName[j]) {
      count++;
    }
  }
  document.write(userName[i] + " - " + count + "<br>");
}
