// Loops

// while loop - checks the condition first
let num = 0;

while (num < 5) {
    console.log(num);
    num++;
}

// do while loop - runs the code block first and then checks the condition
num = 0;

do {
    console.log(num);
    num++;
} while (num < 5);

// for loop - runs the code block for a specific number of times

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// continue statement - skips the current iteration and continues with the next one
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
