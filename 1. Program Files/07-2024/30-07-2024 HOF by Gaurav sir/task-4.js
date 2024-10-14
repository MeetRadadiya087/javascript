// Q-4. Given an array of numbers, create a new array containing only the positive numbers. 

const numbers = [-10, -5, 0, 5, 10, 15, -3, 7];

const positiveNumbers = numbers.filter(num => num > 0);

console.log("Original array:", numbers);
console.log("Positive numbers:", positiveNumbers);
