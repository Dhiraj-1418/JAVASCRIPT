// 6. Static Methods & Properties
// Scenario: You are building a movie rating system where users can rate movies. The system should also track the total number of ratings given.

// Task:

// Create a Movie class with properties: title and ratings (array).
// Add a static property totalRatingsCount.
// Implement a method addRating(rating) that updates both instance ratings and the static count.
 

class Movies{

    static total_rating = 0 ;

    constructor(tittle){
        this.tittle = tittle;
        this.ratings_on_movies = [];
    }

    addRating(rating){

        this.ratings_on_movies.push(rating);
        Movies.total_rating ++ ;

    }

    print(){

        document.writeln("Total Rating on movies  = " +  Movies.total_rating);

    }

}

const movie1 = new Movies("Inception");
const movie2 = new Movies("Interstellar");

movie1.addRating(5);
movie1.addRating(4);
movie2.addRating(3);
movie2.addRating(5)

movie1.print();
