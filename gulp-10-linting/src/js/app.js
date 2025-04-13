// src/app.js

// Example of ES6 arrow function and template literals
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => greet(name));
