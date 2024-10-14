function validateAge(age) {
    try {
        if (typeof age !== 'number') {
            throw new TypeError('Age must be a number.');
        }
        if (age < 0 || age > 150) {
            throw new RangeError('Age must be between 0 and 150.');
        }
        return `Age is valid: ${age}`;
    } catch (error) {
        console.error('Validation error:', error.message);
    }
}

console.log(validateAge(25));
console.log(validateAge('25'));
console.log(validateAge(200));
