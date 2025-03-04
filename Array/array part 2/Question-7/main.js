let array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]
let indian_cricketers = array_is;

document.write("Defined Array is :-  "+  indian_cricketers + " <hr> ")

//.Push
{
    let first = array_is.push(" Akshar Patel ");
    document.write("Array using .Push :-  "  + array_is + "<hr>")
}


//.pop 
{
     array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]
    indian_cricketers = array_is;

    let second = array_is.pop()
    document.write("Array using .Pop :-  "  + second + "<hr>")
}


 
//.shift
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]
    indian_cricketers = array_is;

    let third = array_is.shift()
    document.write("Array using .Shift :-  "  + third + "<hr>")
}



//.unshift
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]
    indian_cricketers = array_is;

    let fourth = array_is.unshift("MS Dhoni")
    document.write("Array using .Unshift :-  "  + indian_cricketers + "<hr>")
}


//.Join
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]
    indian_cricketers = array_is;

    let fifth = array_is.join(" *_* ")
    document.write("Array using .Join :-  "  + fifth + "<hr>")

}


//.Sort
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]
    nums = [10 , 20 ,30 ,40, 50 ,60 ,70 ,80 ,90 ]
    indian_cricketers = array_is;

    let sixth = array_is.sort()
    document.write("Array using .Sort :-  "  + sixth + "<hr>")
    
    let sixth_ = nums.sort()
    document.write("Array using .Sort :-  "  + sixth_ + "<hr>") 

}


//.at
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]
    indian_cricketers = array_is;

    let seven = array_is.at(6)
    document.write("Array using .at :-  "  + seven + "<hr>")

}


 