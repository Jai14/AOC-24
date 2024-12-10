import { log } from 'console';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'input.txt');

const data = fs.readFileSync(filePath, 'utf8');

const lines = data.split('\n');

console.log('Total number of lines : ' + lines.length);

//-----------------------------------------------------------------------------------------------------------------
/// PART 1 /////

function safeLineCheck(line){  
    const numbers = line.split(' ').map(Number);
    const isIncreasing = numbers.every((num, i, arr) => i === 0 || (num > arr[i - 1] && num - arr[i - 1] <= 3));
    const isDecreasing = numbers.every((num, i, arr) => i === 0 || (num < arr[i - 1] && arr[i - 1] - num <= 3));

    const check =  isIncreasing != isDecreasing;

    return check;
}


const safelines = lines.filter((line) => safeLineCheck(line)).length;
log('answer first : ' + safelines);

//-----------------------------------------------------------------------------------------------------------------
/// PART 2 /////

function oneUnsafeLineCheck(line){  
    const numbers = line.split(' ').map(Number);
    
    let increasingFailures = 0;
    let decreasingFailures = 0;

    const isNotIncreasingByOne = numbers.every((num, i, arr) => {
        if (i === 0 || (num > arr[i - 1] && num - arr[i - 1] <= 3)) {
            return true;
        } else {
            increasingFailures++;
            return increasingFailures <= 1;
        }
    });
    
    const isNotDecreasingByOne = numbers.every((num, i, arr) => {
        if ( i === 0 || (num < arr[i - 1] && arr[i - 1] - num <= 3)) {
            return true;
        } else {
            decreasingFailures++;
            return decreasingFailures <= 1;
        }
    });

    const check =  isNotIncreasingByOne != isNotDecreasingByOne;

    return check;
}

const unsafelines = lines.filter((line) => !safeLineCheck(line));
log('Number of unsafe lines : ' + unsafelines.length);
const oneUnsafeLine = unsafelines.filter((line) => oneUnsafeLineCheck(line)).length;
log('answer second : ' + oneUnsafeLine);





