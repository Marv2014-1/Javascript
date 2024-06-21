// var, let, const


// traditional way of declaring variables
var greeter = "hey hi";

console.log(greeter + " Global");

function myFunction() {
    console.log(greeter + " Global from a function");

    var hello = "hello";
    console.log(hello + " Local");
}

myFunction();

//doesn't work because hello is a local variable to the function above
try {
    console.log(hello + " Local");   
} catch (error) {
    console.log("Error: " + error + " because hello is a local variable to the function above");
}


// new way of declaring variables

console.log("\n\nnew way of declaring variables");

let greeter2 = "hey hi";

if (true) {
    let greeter2 = "changed greeter";
    console.log(greeter2 + " Local");
}

// this way, gloabl and local variables don't conflict as using var causes
// them to be in the same scope and thus overwriting each other (don't use var?)
console.log(greeter2 + " Global");

// const is used to declare constants
const greeter3 = "hey hi const";

console.log("\n\nconstents");

try {
    greeter3 = "changed greeter const";
} catch (error) {
    console.log("Error: " + error + " because greeter3 is a constant");
}

//const with objects is special
const greeter4 = {
    message: "say hi",
    times: 4
}

// this works because the object is constant, but the properties are not
// we are not changing the pointer of the object, but the properties of the object
greeter.message = "This greeter can be changed because it is an object";
console.log(greeter4.message);