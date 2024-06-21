// objects
// key value pairs in curly braces
const person = {name: "John", age: 30, city: "New York"};

console.log(person); // {name: "John", age: 30, city: "New York"}

const anotherPerson = {hobbies: ["music", "movies", "sports"]};

console.log(anotherPerson.hobbies[0]); // music

// Accessing object properties
console.log(person.name); // John
console.log(person["name"]); // John

// Adding properties
person.email = "email@something";
console.log(person.email); // email@something

// Deleting properties
delete person.email;
console.log(person.email); // undefined

// Object methods
const person2 = {
    greet: function () {
        console.log("Hello");
    },
};

// change the method. This will override the greet method seen above
person2.greet = function () {
    console.log("Hi");
};

person2.greet(); // Hello

// this keyword
const person3 = {
    name: "John",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    },
};

person3.greet(); // Hello, my name is John

// Constructor function
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const person4 = new Person("John", 30, "New York");
console.log(person4); // Person {name: "John", age: 30, city: "New York"}

// inheritance
function vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// this function will inherit the properties of the vehicle function
function car(make, model, year, doors) {
    vehicle.call(this, make, model, year);
    this.doors = doors;
}

const myCar = new car("Ford", "Focus", 2010, 4);
console.log(myCar); // car {make: "Ford", model: "Focus", year: 2010, doors: 4}

// other way to inherit
const newCar = Object.create(vehicle.prototype);
newCar.make = "Chevy";
newCar.model = "Cruze";
newCar.year = 2015;
newCar.doors = 4;

console.log(newCar.model); // Cruze

// destructuring objects
const {make: myCarMake} = newCar;
console.log(myCarMake); // Chevy
myCarMake = "Toyota";

// this does not change the value of the object

console.log(newCar); // {make: "Chevy", model: "Cruze", year: 2015, doors: 4}
