// String
const myVariable = "Mathematics";

// The length property returns the length of a string (number of characters).
console.log(myVariable.length); // 11

// String Methods
// CharAt() method returns the character at a specified index (position) in a string.
console.log(myVariable.charAt(0)); // M

// indexOf() method returns the position of the first occurrence of a specified value in a string.
console.log(myVariable.indexOf('t')); // 4

// toUpperCase() method converts a string to uppercase letters.
console.log(myVariable.toUpperCase()); // MATHEMATICS

// toLowerCase() method converts a string to lowercase letters.
console.log(myVariable.toLowerCase()); // mathematics

// lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
console.log(myVariable.lastIndexOf('t')); // 7

// substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
console.log(myVariable.substring(0, 4)); // Math

// includes() method determines whether a string contains the characters of a specified string.
console.log(myVariable.includes('Math')); // true
