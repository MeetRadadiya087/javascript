// Q-6. Given an array of numbers, find the product of all the numbers. 

const numbers = [1, 2, 3, 4, 5];

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log("Array of numbers:", numbers);
console.log("Product of all numbers:", product);

