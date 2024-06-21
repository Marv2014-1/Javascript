// Numbers

// An Integer is a whole number, a number without a decimal point.
const myInteger = 10;

// A Float is a number with a decimal point.
const myFloat = 10.011;

console.log(myInteger);
console.log(myFloat);

console.log(myInteger == myFloat); // false


// converting string to number
const myString = '10';
const myNumber = Number(myString);

console.log(myNumber); // 9
console.log(myNumber == myInteger); // true

// convert a boolean to a number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// determining if a number is an integer
console.log(Number.isInteger(myInteger)); // true

// parseInt() function
console.log(parseInt('10')); // 10

// parseFloat() function
console.log(parseFloat('10.011')); // 10.011

// toSting() method
console.log(myInteger.toString()); // '10'

// toFixed() method
console.log(myFloat.toFixed(2)); // '10.01'

// isNaN() function
console.log(isNaN('apple')); // true

// math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.trunc(4.7)); // 4
console.log(Math.round(4.7)); // 5
console.log(Math.pow(8, 2)); // 64
console.log(Math.sqrt(64)); // 8
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150
console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(Math.random() * 11)); // random number between 0 and 10