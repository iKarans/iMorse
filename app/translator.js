import { englishToMorse, morseToEnglish} from "./data.js";

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
    // 😏
    let solutionString = solutionArray.join("");
    if(solutionString.includes("boobies")) {
        solutionString = solutionString.replace("boobies", "(.Y.)");
    }
    return solutionString;
};

export const isValidEnglishInput = (str) => {
    if(typeof str != "string") {
        return false;
    }
    let splitArray = (str.toLowerCase()).split("");
    for(let i = 0; i < splitArray.length; i++) {
        if(!(Object.keys(englishToMorse).includes(splitArray[i]))) {
            return false;
        };
    };
    return true;
};

export const isValidMorseInput = (str) => {
    if(typeof str != "string") {
        return false;
    }
    let splitArray = str.split(" ");
    for(let i = 0; i < splitArray.length; i++) {
        if(!(Object.values(englishToMorse).includes(splitArray[i]))) {
            return false;
        };
    };
    return true;
};

