// wap to perform method overriding to display student details.
// school(name,year) -> student(name,std,school,year)
// display() <- override this method


class School {

    #name;
    #year;

    School_info(name , year){

        this.#name = name;
        this.#year = year;
    }

    display(){

        document.writeln("Name of the School :- " + this.#name + "<br>");
        document.writeln("Year : " + this.#year + "<br>");
    }
        
}

class Student extends School {

    #student_name;
    #std;

    Student_info(student_name,std){

        this.#student_name = student_name;
        this.#std =std;
    
    }

    display(){

        super.display()
        document.writeln("Student name : " + this.#student_name  + "<br>");
        document.writeln("STD : " + this.#std + "<br>");

    }

}

const print = new Student();
print.School_info("TNTV" , 1999  );
print.Student_info("T head" , 11+"yr");
print.display();