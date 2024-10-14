// Q-1. Given an array of numbers, create a new array containing the squares of each number.

function squareNumbers(arr) {
    return arr.map(number => number * number);
}

const numbers = [2, 4, 6, 8];
const squaredNumbers = squareNumbers(numbers);

console.log(squaredNumbers);
