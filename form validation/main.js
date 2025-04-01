const user_name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const con_password  = document.getElementById("con-pass");

const login_btn = document.getElementById("login_btn")

let error = document.getElementById("error")
let name_error = document.getElementById("name_error")
let email_error = document.getElementById("email_error")
let password_error = document.getElementById("password_error")





login_btn.addEventListener("click" , () => {

    username_error();
    error_email();
    error_password();
    formvalidation();

});


function username_error() {
    let check = ['$' , '@' , '^' , '*', '!' , '#' ,'%' , '&' , '(' , ')' , ' ' , '{' ,  '}' , '[' , ']' , '/' , '*' , ' +' , '-' , '_' ,'`' , '~' , '|' , '/' , '?' , '>' ,'<' , '.' , ',', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

   
    for (let i = 0; i < user_name.value.length; i++) 
        {
        for (let j = 0; j < check.length; j++) 
            {
            if (user_name.value[i] == check[j]) 
                {
                    name_error.innerHTML = "*Invalid username";  
                return;  
            }
        } 
    }

    name_error.innerHTML = " "; 
}


function error_email()
{

    let check = [".@gmail.com" , '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

    for(let i=0; i<email.value.length; i++)
    {
        for(let j=0; j<check.length; j++)
            
            {
                if(email.value[i] != check[j])
                {
                    email_error.innerHTML = "*Invalid gmail use : '.@gmail.com & numbers' "
                    return ;
                }
            }
    }

    email_error.innerHTML = " ";
}


function error_password(){

    let check = ['$' , '@' , '^' , '*', '!' , '#' ,'%' , '&' , '(' , ')' , ' ' , '{' ,  '}' , '[' , ']' , '/' , '*' , ' +' , '-' , '_' ,'`' , '~' , '|' , '/' , '?' , '>' ,'<' , '.' , ',', '1', '2', '3', '4', '5', '6', '7', '8', '9' , " "];
    let checkLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let checkUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < password.value.length; i++) 
    {

        for (let j = 0; j < check.length; j++) 
            {
            if (password.value[i] == check[j]) 
                {
                    return;  
            }
        } 


        for (let k = 0; k < checkLowercase.length; k++)
        {
            if (password.value[i] == checkLowercase[k]) {
                return;; 
            }
        }

    } 


     password_error.innerHTML = "*Password must contain at least 1 uppercase (A-Z), 1 number (0-9), and 1 special character (@, #, $, etc.).";  
}


   


    function formvalidation(){
        if(user_name.value == "" || email.value == "" || password.value == "" || con_password.value == "")
        {
            error.innerHTML = "*All the inputs must be filled"
        }
        else
        {
            error.innerHTML = "* login Successfull !"
        }

    }





    
    