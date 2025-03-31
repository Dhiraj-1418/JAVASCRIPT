class EmployeeData {

    name;
    uid;
    salary
    post;
    employeeDetails(name,uid,salary,post)
    {
        document.writeln(`Name : ${name}<br>`);
        document.writeln(`UID : ${uid}<br>`);
        document.writeln(`Salery : ${salary}<br>`);
        document.writeln(`Post : ${post}<br>`);
    }

}

const emp1 = new EmployeeData();
const emp2 = new EmployeeData();
const emp3 = new EmployeeData();



document.writeln("<h2>Employee - 1 </h2>")
emp1.employeeDetails("Rahul" , 8621 , "$"+750 , "Helper    ")

document.writeln("<h2>Employee - 2 </h2>")
emp2.employeeDetails("Swapnesh" , 8762 , "$"+6504 , " Manager")

document.writeln("<h2>Employee - 3 </h2>")
emp3.employeeDetails("Pravin" , 8645 , "$"+7800 , "Managing Director")
