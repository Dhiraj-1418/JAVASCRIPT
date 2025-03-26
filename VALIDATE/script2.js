
function nameValidateCheck(){
  let array = "0123456789";
let check = "asd";
let nameValidate = [];
for (i = 0; i < check.length; i++) {
  for (j = 0; j < array.length; j++) {
    if (check[i] == array[j]) {
      // nameValidate.push(check[i]);
   
      return "Enter valid name";
    }
    else
    {
      return "";
    }
    
  }
}

}



let x=nameValidateCheck();
document.writeln(x)
