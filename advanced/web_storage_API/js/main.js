// Web Storage API

// Not part of the DOM -- refers to the Window API
// Avilable to JS via the global object 'window'

// window.alert("Hello World!");
// alert("Hello World!");

console.log(window.location);

// #region Local Storage

const myObject = {
    name: "John",
    age: 30,
    city: "New York",

    toString: function () {
        return `${this.name} is ${this.age} years old and lives in ${this.city}`;
    },
};

const myArray = ["eat", "sleep", "code", "repeat"];

myObject.toString(); // this is not saved in local storage

// Store data in local storage as a string
localStorage.setItem("person", myObject);
localStorage.setItem("tasks", myArray);
const mySessionData = localStorage.getItem("person");
const mySessionTasks = localStorage.getItem("tasks");

// retrive the local storage data
console.log(mySessionData);
console.log(mySessionTasks);

// we can retrive this data after leaving the website

// #endregion
