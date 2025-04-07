// 5. Constructor & Object Creation
// Scenario: You are building a food delivery app where each restaurant has a name, cuisine type, and rating.

// Task:

// Create a Restaurant class with properties: name, cuisineType, and rating.
// Instantiate 3 restaurant objects with different values.

class Restaurant{

    constructor(name,cuisineType,rating)
    {
        this.name = name;
        this.cuisineType = cuisineType;
        this.rating = rating;
    }

    print()
    {
        document.writeln("Name : " + this.name + "<br>");
        document.writeln("CuisineType  : " + this.cuisineType + "<br>");
        document.writeln("Rating : " + this.rating + "<br><hr><br>");

    }

}

const r1 = new Restaurant("McDonald's" , "fast food" , 4 + " stars");
const r2 = new Restaurant("Le Bernardin" , "Seafood" ,5 + " stars");
const r3 = new Restaurant("Starbucks" , "cafe " , 3.5 + " stars");

document.writeln("<h2>Restaurant 1</h2>")
r1.print();

document.writeln("<h2>Restaurant 2</h2>")
r2.print();

document.writeln("<h2>Restaurant 3</h2>")
r3.print();
