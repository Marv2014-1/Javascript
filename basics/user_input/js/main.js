// User Input

// alets the user with a message
alert("Hello World");

// confirm prompts the user with a message and returns a boolean value
var userResult = confirm("Are you sure you want to do this?");
console.log(userResult);

// prompt prompts the user with a message and returns the user input
var userInput = prompt("What is your name?");
console.log(userInput ?? "Empty prompt entered");
