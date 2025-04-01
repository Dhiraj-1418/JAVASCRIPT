$("#btn").on("click" , function() {
    console.log("press !")

    let isvalid = true;


    let userName = $("#user_name").val();
    let userRegx = /^[a-zA-Z][a-zA-Z0-9-_]{3,32}$/
    if(!userRegx.test(userName))
    {
        $("#err_1").text("*Invalid user name !")
        isvalid = false;
    }

    
    let email = $("#email").val();
    let emailRegx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(!emailRegx.test(email))
    {
        $("#err_2").text("*Invalid gmail use : '.@gmail.com & numbers' ")
        isvalid = false;
    }


    let password = $("#pass").val();
    let passwordRegx = /^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(!passwordRegx.test(password))
    {
        $("#err_3").text("*Invalid password !")
        isvalid = false;
    }

    let con_pass = $("#con-pass").val();
    if(password !== con_pass)
    {
        $("#err_4").text("*Password do not match !")
        isvalid = false;
    }
 

    if(isvalid){
        alert("Login successful !");
    }
});