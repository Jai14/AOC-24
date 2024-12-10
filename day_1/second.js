import { log } from "console";

export function second (numbersLeft,numberRights) {

    numbersLeft = numbersLeft.map(Number);
    numberRights = numberRights.map(Number);

    const scoredValue = numbersLeft.map(number => {
        return similarityScore(number,numberRights);
    });

    const secondAns = scoredValue.reduce((acc,curr) => {
        return acc + curr;
    },0);

    return secondAns;
}

function similarityScore(numberToSearch,numberRights){
    const occurance =  numberRights.filter(numberRight => numberRight === numberToSearch).length;
    const similarityScore = numberToSearch * occurance;
    return similarityScore;
}