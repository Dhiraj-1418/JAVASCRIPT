let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let check = "Rahul8";
let get;
let count;
for (i = 0; i < check.length; i++) {
  count = 0;
  for (j = 0; j < array.length; j++) {
    check[i] == array[j];
    count++;
  }
}
document.writeln(count);
