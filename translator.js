import { englishToMorse } from "./data";

export const translate = (str) => {
    let solutionArray = [];
    let splitArray = (str.toLowerCase()).split("");
    for(let i = 0; i < splitArray.length; i++) {
        solutionArray.push(englishToMorse[splitArray[i]]);
        if(i != splitArray.length - 1 ) {
            solutionArray.push(" ");
        };
    };

    return solutionArray.join("");
};

export const isValidInput = (str) => {
    let splitArray = (str.toLowerCase()).split("");
    for(let i = 0; i < splitArray.length; i++) {
        if(!(Object.keys(englishToMorse).includes(splitArray[i]))) {
            return false;
        };
    };
    return true;
};