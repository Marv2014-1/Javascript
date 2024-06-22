// Javascript Classes

// #region ES6 Classes syntax
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    method() {
        // do something
    }
}

const car1 = new Car("Toyota", "Corolla", 2020);

// pizza class

class pizza {
    constructor(size, crust, sauce, cheese, toppings) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
    }

    bake() {
        console.log("Your pizza is baking!");
        // the ingredients are:
        console.log("Size: " + this.size);
        console.log("Crust: " + this.crust);
        console.log("Sauce: " + this.sauce);
        console.log("Cheese: " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}

const pizza1 = new pizza("large", "thin", "tomato", "mozzarella", [
    "pepperoni",
    "mushrooms",
    "onions",
]);

pizza1.bake();

// change the toppings - this is bad practice because we are changing the
// variables outside of the class
pizza1.toppings = ["sausage", "peppers", "onions"];
pizza1.bake();
// #endregion

// #region getters and setters
class betterPizza {
    constructor(size, crust, sauce, cheese, toppings) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
    }

    bake() {
        console.log("Your pizza is baking!");
        // the ingredients are:
        console.log("Size: " + this.size);
        console.log("Crust: " + this.crust);
        console.log("Sauce: " + this.sauce);
        console.log("Cheese: " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }

    /* #region  Getters and Setters */
    get getSize() {
        return this.size;
    }

    get getCrust() {
        return this.crust;
    }

    get getSauce() {
        return this.sauce;
    }

    get getCheese() {
        return this.cheese;
    }

    get getToppings() {
        return this.toppings;
    }

    changesize(newSize) {
        this.size = newSize;
    }

    changecrust(newCrust) {
        this.crust = newCrust;
    }

    changesauce(newSauce) {
        this.sauce = newSauce;
    }

    changeCheese(newCheese) {
        this.cheese = newCheese;
    }
    changeToppings(newToppings) {
        this.toppings = newToppings;
    }
    /* #endregion */
}

const betterPizza1 = new betterPizza("large", "thin", "tomato", "mozzarella", [
    "pepperoni",
    "mushrooms",
    "onions",
]);

betterPizza1.bake();

betterPizza1.changeToppings(["sausage", "peppers", "onions"]);
betterPizza1.bake();

console.log("------------------");
// #endregion

// #region Inheritance  - extends
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log("I am an animal");
    }

    eat() {
        console.log("I am eating");
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    speak() {
        console.log("I am a dog");
    }
}

const dog1 = new Dog("Rex", 3, "Golden Retriever");
dog1.speak();
dog1.eat(); // inherited from the parent class
console.log(dog1);

// super() - calls the parent class constructor

// #endregion

// #region private variables
class Person {
    #name; // private variable
    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
    }
}

const person1 = new Person("John");
console.log(person1.getName());
console.log(person1.name); // undefined - private variable

person1.setName("Jane");
console.log(person1.getName());

console.log("------------------");
//#endregion

// #region static methods
class Math {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    hello() {
        console.log("Hello");
    }
}

// we can call the static method without creating an instance of the class
console.log(Math.add(2, 3));
console.log(Math.subtract(5, 3));

//Math.hello(); // error - hello is not a static method

const math1 = new Math();
math1.hello(); // this works
//math1.add(2, 3); // error - add is not a method of math1

// #endregion this also override the Math object

// #region public, private, protected - access modifiers
// public - accessible from anywhere
// private - accessible only within the class
// protected - accessible within the class and subclasses

class Person2 {
    name; // public
    #age; // private
    _id; // protected
    constructor(name, age, id) {
        this.name = name;
        this.#age = age;
        this._id = id;
        this.#privateMethod();
    }

    // private method
    #privateMethod() {
        console.log("I am a private method");
    }

    // public method
    publicMethod() {
        console.log("I am a public method");
    }

    // protected method
    _protectedMethod() {
        console.log("I am a protected method");
    }
}

const person2 = new Person2("John", 25, 123);
person2.publicMethod();
// person2.#privateMethod(); // error - private method
person2._protectedMethod(); // will not throw an error but the _ is a convention to show that it is protected

// #endregion
