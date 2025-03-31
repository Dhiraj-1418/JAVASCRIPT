// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.

class StudentData{

    #name;
    #rollNo;
    #age;
    #std;
    #percentage;

    constructor(name,rollNo,age,std,percentage){

        this.#name = name;
        this.#rollNo = rollNo;
        this.#age = age;
        this.#std = std;
        this.#percentage = percentage;
    }

    output(){

        document.writeln(`Name : ${this.#name}<br>`);
        document.writeln(`Roll Number : ${this.#rollNo}<br>`);
        document.writeln(`Age : ${this,this.#age}<br>`);
        document.writeln(`Standard :  ${this.#std}<br>`);
        document.writeln(`Percentage : ${this.#percentage}`);

    }
}

const firstStudent = new StudentData ("Rahul" , 16 , 17+" years" , 11+"th" , 96.24+"%");
const secondStudent = new StudentData ("Saurabh" , 18 , 14+" years" , 9 +"th" , 72.44+"%");
const thirdStudent = new StudentData ("Divya" , 2 , 18+" years" , 12+"th" , 73.34+"%");

document.writeln('<h2> First Student </h2>')
firstStudent.output();
document.writeln('<h2>Second Student </h2>')
secondStudent.output();
document.writeln('<h2>Third Student </h2>')
thirdStudent.output();