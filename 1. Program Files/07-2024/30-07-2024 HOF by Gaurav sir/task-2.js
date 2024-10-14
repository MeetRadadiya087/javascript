// Q-2. Given an array of lowercase strings, create a new array with all strings capitalized. 

function capitalizeStrings(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}


const lowercaseStrings = ['apple', 'banana', 'cherry', 'date'];
const capitalizedStrings = capitalizeStrings(lowercaseStrings);

console.log(capitalizedStrings);
