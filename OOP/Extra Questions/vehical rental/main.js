    //  2. Inheritance (Tricky Question with All Types)
    //  Scenario: You are working on a vehicle rental system. Different types of vehicles share some common properties, 
    // but there are multiple levels and categories of vehicles.

    // Task:

    // Create a Vehicle class with properties brand and year.
    // Create a Car class that extends Vehicle and adds a fuelType property.
    // Create a Bike class that extends Vehicle and adds a hasGear property.
    // Add another class ElectricCar that extends Car and adds a batteryCapacity property.
    // Implement a getDetails() method in Vehicle and override it in different subclasses.


class Vehicle {

    #brand;
    #year;

    constructor (brand,year){

        this.#brand = brand;
        this.#year = year ;
    }

    getDetails(){

        document.writeln("Brand : " + this.#brand + "<br>")
        document.writeln("Year : " + this.#year  + "<br>")
    }

}


class Car extends Vehicle {

    #fueltype ;

    constructor(brand,year,fueltype){

        super(brand,year);
        this.#fueltype = fueltype;

    }

    getDetails(){

        super.getDetails();
        document.writeln("Fueltype : " + this.#fueltype ); 

    }

    
}


class Bike extends Vehicle {

    #hasgear ;

    constructor(brand,year,hasgear){

        super(brand,year);
        this.#hasgear = hasgear;

    }

    getDetails(){

        super.getDetails();
        document.writeln("hasgear : " + this.#hasgear)  

    }

}

class ElectricCar extends Car {

    #batteryCapacity ;

    constructor(brand,year,fueltype,batteryCapacity){

        super(brand,year,fueltype);
        this.#batteryCapacity = batteryCapacity;

    }

    getDetails(){

        super.getDetails;
        document.writeln("batteryCapacity : " + this.#batteryCapacity)  

    }
}


const car = new Car("Toyota" ,  2021, "Petrol");
document.writeln("<h2>Car info </h2>")
car.getDetails();


const bike = new Bike("honda" ,  2011, "Petrol");
document.writeln("<h2>Bike info </h2>")
car.getDetails();
 
const Ev = new ElectricCar("tata" ,  2022, "Electric");
document.writeln("<h2>Electric Car info </h2>")
car.getDetails();