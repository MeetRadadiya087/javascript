function getElementAtIndex(array, index) {
    try {
        if (!Array.isArray(array)) {
            throw new TypeError('First argument must be an array.');
        }
        if (index < 0 || index >= array.length) {
            throw new RangeError('Index out of bounds.');
        }
        return array[index];
    } catch (error) {
        console.error('Access error:', error.message);
    }
}

const numbers = [10, 20, 30];
console.log(getElementAtIndex(numbers, 1));
console.log(getElementAtIndex(numbers, 5));
console.log(getElementAtIndex('not an array', 1));
