// Higher order functions

// Higher order functions are functions that take other functions as arguments or return functions as their results. This is a fairly advanced concept in JavaScript, but it's a powerful one. Higher order functions allow us to abstract over actions, not just values. They come in several forms. For example, you can have functions that create new functions.

// create an array with user id, id, and title
const users = [
    {id: 1, name: "John", userId: 1},
    {id: 2, name: "Jane", userId: 1},
    {id: 3, name: "Jack", userId: 2},
    {id: 4, name: "Jill", userId: 2},
    {id: 5, name: "Jim", userId: 3},
];

// for each user, get the user id, id, and title
users.forEach((user) => {
    console.log(user);
});

// filter the users by user id
const userId = 1;
const user = users.filter((user) => user.userId === userId);
console.log(user); // returns with john and jane since they have user id of 1

// map the users by user id
const userNames = users.map((user) => user.name);
console.log(userNames); // returns with john, jane, jack, jill, and jim

// reduce the users by user id and return the total of the user id values
const userTotal = users.reduce((total, user) => {
    return total + user.userId;
}, 0);

console.log(userTotal); // returns with 9
