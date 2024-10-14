function readFile(filename) {
    try {
        if (filename !== 'data.txt') {
            throw new Error(`File "${filename}" not found.`);
        }
        return 'File content goes here.';
    } catch (error) {
        console.error('File operation error:', error.message);
    }
}

console.log(readFile('data.txt'));
console.log(readFile('missing.txt'));

