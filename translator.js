import { englishToMorse, morseToEnglish} from "./data";

export const translateToMorse = (str) => {
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

export const translateToEnglish = (str) => {
    let solutionArray = [];
    let splitArray = (str.toLowerCase()).split(" ");
    for(let i = 0; i < splitArray.length; i++) {
        solutionArray.push(morseToEnglish[splitArray[i]]);
    };

    return solutionArray.join("");
};

export const isValidEnglishInput = (str) => {
    let splitArray = (str.toLowerCase()).split("");
    for(let i = 0; i < splitArray.length; i++) {
        if(!(Object.keys(englishToMorse).includes(splitArray[i]))) {
            return false;
        };
    };
    return true;
};

export const isValidMorseInput = (str) => {
    let splitArray = str.split(" ");
    for(let i = 0; i < splitArray.length; i++) {
        if(!(Object.keys(morseToEnglish).includes(splitArray[i]))) {
            return false;
        };
    };
    return true;
};

