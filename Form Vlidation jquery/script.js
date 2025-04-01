$("#signUp").on("click" , function() {
 
    let validitycheck = true;

    let email = $("#email").val();
    let emailValidate = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(!emailValidate.test(email))
    {
        $("#emailErr").text("*Please Enter valid Email id, Consisting of `@` and all letters must be in lowercase with suffix of .com, .yahoo, .outlook")
        validitycheck = false;
    }else{
        $("#emailErr").text(null);
    }


    let password = $("#password").val();
    let passValidate = /^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(!passValidate.test(password))
    {
        $("#passErr").text("*Invalid password !")
        validitycheck = false;
    }else
    {
        $("#passErr").text(null);
    }

    let conPass = $("#confirmPassword").val();
    if(password !== conPass)
    {
        $("#conPassErr").text("*Password do not match !")
        validitycheck = false;
    }
    else
    {
        $("#conPassErr").text(null);
    }
 
    if(validitycheck==true){
        alert("Signed Up successfully!");
    }
});