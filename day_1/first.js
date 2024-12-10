import { second } from './second.js';
import { log } from 'console';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    const lines = data.split('\n');

    const numbersBoth = lines.map((line) => {
    const splitLine = line.split(' ');
    return splitLine.filter((char) => char !== ' ' && char !== '');
    });

    const numbersLeft = numbersBoth.map((numbers) => {
        return numbers[0];
    });
    const numbersRight = numbersBoth.map((numbers) => {
        return numbers[1];
    });

    numbersLeft.sort((a, b) => a - b);
    numbersRight.sort((a, b) => a - b);

    const difference = numbersLeft.map((number, index) => {
        return Math.abs(numbersRight[index] - number);
    });

    const total = difference.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    log('answer first : ' + total)
    log('answer second : ' + second(numbersLeft,numbersRight));
});

