function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve('Operation succeeded.');
            } else {
                reject(new Error('Operation failed.'));
            }
        }, 1000);
    });
}

simulateAsyncOperation(true)
    .then(result => console.log(result))
    .catch(error => console.error('Async operation error:', error.message));

simulateAsyncOperation(false)
    .then(result => console.log(result))
    .catch(error => console.error('Async operation error:', error.message));
    