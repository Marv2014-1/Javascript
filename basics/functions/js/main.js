// Functions

// Methods = functions that are part of an object

// Functions Declaration Syntax
function greet() {
    console.log("Hello there");
}

greet();

// Function Expression Syntax
const speak = function () {
    console.log("Good day!");
};

speak();

// Arrow Function Syntax
const speakArrow = () => {
    console.log("Good evening!");
};

speakArrow();

// parameters and arguments
function sum(a, b) {
    console.log(a + b); // 3
}

sum(1, 2);

// Arrow Function with parameters
const sumArrow = (a, b) => {
    console.log(a + b);
};

sumArrow(3, 4); // 7

// Returning values
const area = (radius) => {
    return Math.PI * radius ** 2;
};

const areaValue = area(5);
