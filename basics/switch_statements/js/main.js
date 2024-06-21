// Conditionals: Switch Statements

// Syntax
let expression = 1;

switch (expression) {
    case 1:
        // run this code
        break;
    case 2:
        // run this code
        break;
    default:
        // run this code by default if no case is met
}

// Example
let day = 3;

switch (day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day');
}