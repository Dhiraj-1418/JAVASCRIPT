// 4. Abstraction (Hiding Implementation Details)
//  Scenario: You are developing a car rental system. The way a car starts (startEngine()) differs based on whether it’s a PetrolCar or ElectricCar, but the main method should remain the same.

//  Task:

// Create an abstract Car class with a method startEngine().
// Implement two subclasses PetrolCar and ElectricCar, each defining startEngine() differently.

class Car{

    #name ;
    #type;

    constructor(name,type){
        this.#name = name;
        this.#type = type;
    }   

    startEngine(){

        if(this.#type === "petrol")
        {
            document.writeln(this.#name  + " starting petrol Engine !" + "<br>");
        }
        else if(this.#type === "electric")
        {
            document.writeln(this.#name + " starting electric engine........smooth and silent !");
        }
        else
        {
            document.writeln(this.#name + " unknown car type !");
        }

    }
}


const petrol_car = new  Car("Ford"  , "petrol");
const electric_car = new Car("Tesla" , "electric");

petrol_car.startEngine();
electric_car.startEngine();