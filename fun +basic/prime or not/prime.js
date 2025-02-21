function prime_check(n){



    let count=0;


    for(let i=1; i<=n; i++){

        if(n%i==0){
            count++
        }

    


    }
    if(count==2){
       document.write(`${n} Is a prime number!`);

    }
    else if(n==0){
        document.write(`${n} Is a neutral number!`);
    }
    else{
        document.write(`${n} is a Composite number! / is not aprime number`);
    }
}

let n=prompt("Enter value of n ");
n=parseInt(n);
prime_check(n);