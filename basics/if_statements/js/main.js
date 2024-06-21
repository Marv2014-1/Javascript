// Conditionals: If Statements

// Syntax
if (false) {
    // code block
} else if (true) {
    // code block
} else {
    // code block
}

// Example
let age = 18;
if (age >= 18 && isNaN(age) == false) {
    console.log('You are an adult');
} else if (age < 18 && isNaN(age) == false){
    console.log('You are a minor');
} else {
    console.log('Invalid age');
}

age = "not a number";
if (age >= 18 && isNaN(age) == false) {
    console.log('You are an adult');
} else if (age < 18 && isNaN(age) == false){
    console.log('You are a minor');
} else {
    console.log('Invalid age');
}