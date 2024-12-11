const { read } = require('../input.js');

async function main() {
    try {
        const fileContent = await read('day_3/input.txt');  // Read the file
        const pattern = /mul\((\d+),(\d+)\)/g;
        const matches = fileContent.match(pattern);
        const insidecheck = /mul\((\d+),(\d+)\)/;
        const ans = matches.map(item => {
            const match = insidecheck.exec(item);  // Try to match the pattern
            if (match) {
                const num1 = Number(match[1]);  // Convert first captured group to a number
                const num2 = Number(match[2]);  // Convert second captured group to a number
                return Number(num1 * num2);  // Multiply the numbers and return the result
            }
        });  
        const finalAns = ans.reduce((acc, curr) => acc + parseInt(curr), 0);
        console.log('Final answer is', finalAns);

    } catch (err) {
        console.error('Failed to read the file:', err);
        return;  // Handle error
    }
}

main();