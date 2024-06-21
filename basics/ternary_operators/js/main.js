// Conditionals: Ternary Operators

// Syntax
let expression = true;
let result = expression ? "this is true" : "this is false";

console.log(result);

// chained ternary operators basic
let score = 70;

let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade);

// chained ternary operators advanced
let day = "wednesday";
let isWeekend = day === "saturday" || day === "sunday" ? "weekend" : "weekday";
console.log(isWeekend);
