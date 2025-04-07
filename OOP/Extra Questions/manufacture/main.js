// 10. Factory Pattern
//  Scenario: You are developing a vehicle manufacturing system where cars and bikes are 
// created dynamically based on input.

//  Task:

// Implement a VehicleFactory class with a createVehicle(type, brand, year) method.
// Based on the type, return either a Car or Bike instance.

class VehicleFactory{

    constructor(type , brand , year )
    {
        this.type = type;
        this.brand = brand;
        this.year = year;
    }

    createVehicle(){

        if(this.type === "car" || this.type ==="Car")
        {
            document.writeln("<h4>CAR </h4>"  + "  brand :   " + this.brand + "<br>  year :   "+ this.year + " <br> ");
            
        }
        else if(this.type === "bike"  || this.type === " Bike")
        {
            document.writeln("<h4>BIKE </h4>"  + "  brand :   " + this.brand + " <br> year :   "+ this.year + " <br> ");
        }
    }

}

const car = new VehicleFactory("car", "Toyota", 2023 ) 
const bike = new VehicleFactory("bike", "Yamaha", 2022)

car.createVehicle();
bike.createVehicle();