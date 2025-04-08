const input = document.getElementById('input');
const button = document.getElementById('btn');
const list = document.querySelector(".main.list");
let todo =[];
function readTask(){
     const  p = document.createElement("p");
     todo.forEach((task)=>{
        p.innerHTML = task;
        list.appendChild(p);//its add element in the tag
     });
}

function updateTask(){}


function addTask(){
    const value =input.value;
    todo.push(value);
    console.log(task);
    readTask();
}

function Delete(){

}


button.addEventListener('click',addTask)