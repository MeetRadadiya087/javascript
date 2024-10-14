const numbers = [1, 2, 3, 4];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const sumOfOddNumbers = oddNumbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sumOfOddNumbers);