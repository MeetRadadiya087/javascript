let arr = [1, 2, 3, 4, 5]
const result = arr.map((element, index, arr) => {
    return element * 2
})

console.log(result)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = array.filter(num => num % 2 === 0);
const oddNumbers = array.filter(num => num % 2 !== 0);

const evenAddition = evenNumbers.map(num => num + 10);
const oddMultiplication = oddNumbers.map(num => num * 5);

console.log(evenNumbers);
console.log(evenAddition);

console.log(oddNumbers);
console.log(oddMultiplication);

const evenSum = evenAddition.reduce((acc, num) => acc + num, 0);
const oddSum = oddMultiplication.reduce((acc, num) => acc + num, 0);

console.log(evenSum);
console.log(oddSum);
