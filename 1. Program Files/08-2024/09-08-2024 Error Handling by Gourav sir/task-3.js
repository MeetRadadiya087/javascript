function parseDate(dateString) {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date string.');
        }
        return date.toDateString();
    } catch (error) {
        console.error('Parsing error:', error.message);
    }
}

console.log(parseDate('2024-08-12'));
console.log(parseDate('Invalid Date'));


