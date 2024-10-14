// Q-3. Given an array of numbers, create a new array containing only the even numbers.

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Original array:", numbers);
console.log("Even numbers:", evenNumbers);
