// Q-5. Given an array of ages, create a new array containing only the ages greater than or equal to 18. 

const ages = [12, 17, 18, 21, 16, 25, 30, 15, 22];

const adults = ages.filter(age => age >= 18);

console.log("Original array of ages:", ages);
console.log("Ages 18 and older:", adults);
