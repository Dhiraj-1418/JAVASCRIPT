function factorial(n){

    let i;
    let fact=1;

    for(i=1; i<=n; i++){

       fact=fact*i;

        

    }
    document.write(`The factorial of ${n} is ${fact}`);


}

let n=prompt("Enter the value of N");
n=parseInt(n);
factorial(n);