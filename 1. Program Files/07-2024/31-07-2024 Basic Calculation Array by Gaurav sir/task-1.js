const inputArray = ["assignment", "problem", "media", "upload"];
const charToCheck = 'a';
const filteredArray = inputArray.filter(str =>
str.startsWith(charToCheck) || str.endsWith(charToCheck)
);

console.log(filteredArray);