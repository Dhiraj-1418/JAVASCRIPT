function table(n) {
  for (let i = 1; i <= 10; i++) {
    document.write(n + "× " + i + "= " + i*n + "<br>");
  }
  
}

let n = prompt("Enter the value of n");
n = parseInt(n);

table(n);
