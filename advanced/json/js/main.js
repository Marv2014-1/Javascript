//JSON: Javascript Object Notation
/*
JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.
*/

// #region JSON Syntax Rules example

const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat",
    },
    hello: function () {
        console.log("Hello");
    },
};

console.log(myObj);
myObj.hello();

console.log("-----------------------------------");

const myJSON = JSON.stringify(myObj);
console.log(myJSON);

// JSON files can be sent and received as strings, then parsed into objects

console.log(typeof myJSON);
console.log(myJSON.name); // undefined - JSON is a string

console.log("-----------------------------------");

const myObj2 = JSON.parse(myJSON); // parse the JSON string into an object
console.log(myObj2);
console.log(typeof myObj2); // object

//myObj2.hello(); // this does not work becuse we losst the function when we converted the object to a string

//#endregion
