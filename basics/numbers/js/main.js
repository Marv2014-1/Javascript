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