const { readFile } = require('fs');

// Function to read the file
async function read(filePath) {
    return await new Promise((resolve, reject) => {
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject('Error reading file:', err);  // Reject the promise on error
                return;
            }
            resolve(data);  // Resolve the promise with the file content
        });
    });
}

// Export the function to allow external usage
module.exports = { read };