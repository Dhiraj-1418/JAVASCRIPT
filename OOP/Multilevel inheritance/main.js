

class NationalityIndia {
  constructor(adharNo, birthPlace) {
    this.adharNo = adharNo;
    this.birthPlace = birthPlace;
  }

  nationalityOut() {
    document.writeln(`Adharcard No : ${this.adharNo}<br>`);
    document.writeln(`Birth Place : ${this.birthPlace}<br>`);
  }
}

class Person extends NationalityIndia {
  constructor(adharNo, birthPlace, name, age, gender) {
    super(adharNo, birthPlace);
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  personOut() {
    super.nationalityOut();
    document.writeln(`Name : ${this.name}<br>`);
    document.writeln(`Age : ${this.age}<br>`);
    document.writeln(`Gender : ${this.gender}<br>`);
  }
}

class Employee extends Person {
  constructor(adharNo, birthPlace, name, age, gender, id, salary, role) {
    super(adharNo, birthPlace, name, age, gender);
    this.id = id;
    this.salary = salary;
    this.role = role;
  }

  employeeOut() {
    super.personOut();
    document.writeln(`Id : ${this.id}<br>`);
    document.writeln(`Salary : ${this.salary}<br>`);
    document.writeln(`Post : ${this.role}`);
  }
}

const info = new Employee("3947 6355 8348" , "Uttar Pradesh", "Dhiraj", 19,"Male ", 8475, "10000$", "Managing director");

document.writeln("<h2>Indian - info </h2>");
info.nationalityOut();

document.writeln("<h2>Person - info </h2>");
info.personOut();

document.writeln("<h2>Employee - info </h2>");
info.employeeOut();
