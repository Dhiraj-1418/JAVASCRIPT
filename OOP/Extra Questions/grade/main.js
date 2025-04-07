// 7. Getter & Setter Methods (Easier Example)
//  Scenario: You are developing a student grading system where a student has marks in percentage, 
// but the grade (A, B, C, etc.) should be automatically determined.

//  Task:

// Create a Student class with a property percentage.
// Use a getter grade that returns the grade based on the percentage.
// Use a setter grade that updates percentage based on the grade entered (A, B, C, etc.).

class Student {

    #percentage;

    percentage(percentage){

        this.#percentage =percentage;

    }

    printGrade(){

        if(this.#percentage >100 || this.#percentage<=0)
        {
            document.writeln("Enter valid percentage !");
        }
        else if(this.#percentage >= 90 && this.#percentage <=100)
        {
            document.writeln("A");
        }
        else if(this.#percentage >= 80 && this.#percentage <=89){

            document.writeln("B")
        }
        else if(this.#percentage >= 70 && this.#percentage <=79){

            document.writeln("C")

        }
        else if(this.#percentage >= 35 && this.#percentage <=69)
        {
            document.writeln("D")
        }
        else
        {
            document.writeln("Sorry you are failed ! ");
        }

    }

}

const grade = new Student();
let percent = prompt("Enter you percentage : ");
percent = parseInt(percent);

grade.percentage(percent);
grade.printGrade();