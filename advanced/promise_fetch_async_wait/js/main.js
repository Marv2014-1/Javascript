// Fetch API requires a discussion of
// Callbacks, Promises, thenables, Async/Await

// #region callback
// callbacks don't wait for the previous function to finish before executing the next function

function fetchData(callback) {
    setTimeout(() => {
        // callback("peanut butter");
    }, 1000);
}

// callback hell because of nested callbacks
fetchData((data) => {
    console.log(data);
    fetchData((data) => {
        console.log(data);
        fetchData((data) => {
            console.log(data);
        });
    });
});

// #endregion

// #region promise - a promise is an object representing the eventual completion or failure of an asynchronous operation

// 3 states: pending, fulfilled, rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;

    if (!error) {
        resolve("Success");
    } else {
        reject("Failure");
    }
});

console.log(myPromise);

//#endregion

// #region thenables - thenable is an object that defines a then method

myPromise.then(
    (value) => console.log(value),
    (error) => console.log(error)
);
// #endregion

// #region promise with timer

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("My next promise resolved");
    }, 3000); // resolve after 3 seconds
});

myNextPromise.then((value) => console.log(value));
//#endregion

/*
// #region fetch - fetch API provides an interface for fetching resources (including across the network)

const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((user) => {
            // data exists only in this scope and not in the global scope
            console.log(user); // print each user on a new line
        });
    })
    .catch((error) => {
        console.log(error);
    });

console.log(users); // will print pending because fetch is asynchronous

//#endregion
*/

// #region async/await - async functions enable the use of the await keyword to pause execution and wait for a promise to resolve

const myUsers = {
    userList: [],
};

async function fetchUsers() {
    // wait 4 seconds before fetching users
    await new Promise((resolve) => setTimeout(resolve, 4000));

    console.log("--- fetchUsers ---");
    // await pauses the execution of the function until the promise is resolved
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // also returns a promise, so we must await again
    console.log("--- fetchUsers ---");
    return data;
}

// we could also create another function that calls fetchUsers and waits for it to finish. This chaining ensures that the functions are executed in the correct order.
const anotherFunction = async () => {
    console.log("--- anotherFunction ---");
    const users = await fetchUsers();
    myUsers.userList = users;
    console.log(myUsers.userList);
    console.log("--- anotherFunction ---");
};

anotherFunction();

//#endregion
