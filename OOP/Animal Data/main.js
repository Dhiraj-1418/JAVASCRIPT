class AnimalData {
  #name;
  #type;
  #gender;
  #age;

  animalDetail(name, type, gender, age) {
    this.#name = name;
    this.#type = type;
    this.#gender = gender;
    this.#age = age;
  }

  output() {
    document.writeln(`Name : ${this.#name}<br>`);
    document.writeln(`Type : ${this.#type}<br>`);
    document.writeln(`Gender : ${this.#gender}<br>`);
    document.writeln(`Age : ${this.#age}<br>`);
  } 
}

const firstAnimal = new AnimalData();
const secondAnimal = new AnimalData();
const thirdAnimal = new AnimalData();

firstAnimal.animalDetail("Ramp", "Dog", "male", 5+"years");
secondAnimal.animalDetail("Celia", "Kitty", "female", 0.5+"years");
thirdAnimal.animalDetail("Rox", "cat", "male", 2+"years");

document.writeln(`<h2>First Animal</h1>`);
firstAnimal.output();

document.writeln(`<h2>Second Animal</h1>`);
secondAnimal.output();

document.writeln(`<h2>Third Animal</h1>`);
thirdAnimal.output();
