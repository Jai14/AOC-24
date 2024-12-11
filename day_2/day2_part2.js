import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
    try {
        // Constructing the file path
        const filePath = path.join(__dirname, 'input.txt');

        // Reading the file
        let data = readFileSync(filePath, 'utf8');

        // Splitting the file content into lines and then parsing each line into an array of integers
        const txt_arr = data.split('\n').map(line => line.split(' ').map(Number));

        return part2Check(txt_arr);

    } catch (err) {
        console.error('Error reading the file:', err);
        return "EROOOOOOOOR";
    }
}

function part2Check(txt_arr) {
    let index = 0;
    let total = 0;

    txt_arr.forEach(element => {
        total++;
        if (isDescendingAtMostOne(element) || isAscendingAtMostOne(element)) {
            index++;
        }
    });

    return { Safe: index, Total: total };
}

function isDescendingAtMostOne(array) {
    let wrong = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            wrong++;
            if (wrong > 1) return false;
        }
    }
    return true;
}

function isAscendingAtMostOne(array) {
    let wrong = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            wrong++;
            if (wrong > 1) return false;
        }
    }
    return true;
}

console.log(main());
