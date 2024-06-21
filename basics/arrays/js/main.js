// Arrays

// Create an array
const myArr = [];

// Add elements to the array
myArr.push(1);
myArr.push("words");
myArr.push(false);
myArr.push(3.14);

// Access elements in the array
console.log(myArr); // [1, "words", false, 3.14]

console.log(myArr[0]); // 1

// length property
console.log(myArr.length); // 4

// last element
console.log(myArr[myArr.length - 1]); // 3.14

// Methods

// pop method removes the last element from the array
const last = myArr.pop();
console.log(last); // 3.14
console.log(myArr); // [1, "words", false]

// push method adds elements to the end of the array
myArr.push(5);
console.log(myArr); // [1, "words", false, 5]

// shift method removes the first element from the array
const first = myArr.shift();
console.log(first); // 1
console.log(myArr); // ["words", false, 5]

// this also changes the index of the elements

// reverse method reverses the array
myArr.reverse();
console.log(myArr); // [5, false, "words"]

// join method joins the elements of the array into a string
const joined = myArr.join(", ");
console.log(joined); // 5, false, words

// includes method checks if an element is in the array
const hasWords = myArr.includes("words");
console.log(hasWords); // true

// indexOf method returns the index of an element
const indexWords = myArr.indexOf("words");
console.log(indexWords); // 2

// concat method concatenates two arrays
const moreNumbers = [6, 7, 8];
const newArr = myArr.concat(moreNumbers);
console.log(newArr); // [5, false, "words", 6, 7, 8]

// split method splits a string into an array
const str = "Hello there";
const strArr = str.split(" ");
console.log(strArr); // ["Hello", "there"]

// slice method extracts a section of the array
const sliced = newArr.slice(1, 4);
console.log(sliced); // [false, "words", 6]
console.log(newArr); // [5, false, "words", 6, 7, 8]

// splice method removes elements from the array
const removed = newArr.splice(1, 2);
console.log(removed); // [false, "words"]
console.log(newArr); // [5, 6, 7, 8]

// forEach method iterates over the array
newArr.forEach((num) => {
    console.log(num); // 5, 6, 7, 8
});

// spread operator copies the elements of two arrays into a new array
const spreadArr = [...newArr, ...moreNumbers];
console.log(spreadArr); // [5, 6, 7, 8, 6, 7, 8]

// an array of arrays
const arrSpread = [newArr, moreNumbers];
console.log(arrSpread); // [[5, 6, 7, 8], [6, 7, 8]]
