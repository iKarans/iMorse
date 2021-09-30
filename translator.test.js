import { translateToMorse, isValidEnglishInput, translateToEnglish, isValidMorseInput } from "./translator";

describe("Testing translateToMorse()", () => {
    it("Should translateToMorse \"h\"  to \"....\"", () => {
        let input = "h";
        let output = "....";
        let result = translateToMorse(input);
        expect(result).toBe(output);
    });
    it("Should translateToMorse \"H\"  to \"....\"", () => {
        let input = "H";
        let output = "....";
        let result = translateToMorse(input);
        expect(result).toBe(output);
    });
    it("Should translateToMorse \".-.-. / -....- .-..-. .-.-.- -...-\"", () => {
        let input = "+ -\".=";
        let output = ".-.-. / -....- .-..-. .-.-.- -...-";
        let result = translateToMorse(input);
        expect(result).toBe(output);
    });
    it("Should translateToMorse \"Hello\"  to \".... . .-.. .-.. ---\"", () => {
        let input = "Hello";
        let output = ".... . .-.. .-.. ---";
        let result = translateToMorse(input);
        expect(result).toBe(output);
    });
    it("Should translateToMorse \"Japan\"  to \".--- .- .--. .- -.\"", () => {
        let input = "Japan";
        let output = ".--- .- .--. .- -.";
        let result = translateToMorse(input);
        expect(result).toBe(output);
    });
    it("Should translateToMorse \"Apple pencil\"  to \".- .--. .--. .-.. . / .--. . -. -.-. .. .-..\"", () => {
        let input = "Apple pencil";
        let output = ".- .--. .--. .-.. . / .--. . -. -.-. .. .-..";
        let result = translateToMorse(input);
        expect(result).toBe(output);
    });
});

describe("Testing translateToEnglish()", () => {
    it("Should translate -... . .- - ... / -... -.-- / -.. .-. .  to beats by dre", () => {
        let input = "-... . .- - ... / -... -.-- / -.. .-. .";
        let output = "beats by dre";
        let result = translateToEnglish(input);
        expect(result).toBe(output);
    });
    it("Should translate .-  to a", () => {
        let input = ".-";
        let output = "a";
        let result = translateToEnglish(input);
        expect(result).toBe(output);
    });
    it("Should translate .---- ..--- ...-- to 123", () => {
        let input = ".---- ..--- ...--";
        let output = "123";
        let result = translateToEnglish(input);
        expect(result).toBe(output);
    });
    it("Should translate ..--.. .--.-. .----. .-..-. / .-..-. / .-..-. to ?@\'\" \" \"", () => {
        let input = "..--.. .--.-. .----. .-..-. / .-..-. / .-..-.";
        let output = "?@\'\" \" \"";
        let result = translateToEnglish(input);
        expect(result).toBe(output);
    });
    it("Should translate -... --- --- -... .. . ... to (.Y.)", () => {
        let input = "-... --- --- -... .. . ...";
        let output = "(.Y.)";
        let result = translateToEnglish(input);
        expect(result).toBe(output);
    });
    it("Should translateToMorse \"-... . .- - ... / -... -.-- / -.. .-. .\"  to \"beats by dre\"", () => {
        let input = "-... . .- - ... / -... -.-- / -.. .-. .";
        let output = "beats by dre";
        let result = translateToEnglish(input);
        expect(result).toBe(output);
    });
});

// describe("Testing translateToEnglish()", () => {
//     it("Should translateToMorse \"....\" to \"h\"", () => {
//         let input = "h";
//         let output = "....";
//         let result = translateToMorse(input);
//         expect(result).toBe(output);
//     });
//     it("Should translateToMorse \"....\" to \"H\"", () => {
//         let input = "H";
//         let output = "....";
//         let result = translateToMorse(input);
//         expect(result).toBe(output);
//     });
//     it("Should translateToMorse \".-.-. / -....- .-..-. .-.-.- -...-\" to \"+ -\"\.=\"", () => {
//         let input = "+ -\".=";
//         let output = ".-.-. / -....- .-..-. .-.-.- -...-";
//         let result = translateToMorse(input);
//         expect(result).toBe(output);
//     });
//     it("Should translateToMorse \".... . .-.. .-.. ---\" to \"Hello\"", () => {
//         let input = "Hello";
//         let output = ".... . .-.. .-.. ---";
//         let result = translateToMorse(input);
//         expect(result).toBe(output);
//     });
//     it("Should translateToMorse \".--- .- .--. .- -.\" to \"Japan\"", () => {
//         let input = "Japan";
//         let output = ".--- .- .--. .- -.";
//         let result = translateToMorse(input);
//         expect(result).toBe(output);
//     });
// });

describe("Testing isValidEnglishInput()", () => {
    it("Should return true if input is \"Hello\"", () => {
        let input = "Hello";
        let output = true;
        let result = isValidEnglishInput(input);
        expect(result).toBe(output);
    });
    it("Should return false if input is \"ちんちん\"", () => {
        let input = "ちんちん";
        let output = false;
        let result = isValidEnglishInput(input);
        expect(result).toBe(output);
    });
    it("Should return false if input is \"[]\"", () => {
        let input = "[]";
        let output = false;
        let result = isValidEnglishInput(input);
        expect(result).toBe(output);
    });
    it("Should return false if input is \"{}\"", () => {
        let input = "[]";
        let output = false;
        let result = isValidEnglishInput(input);
        expect(result).toBe(output);
    });
    it("Should return false if input is an array, object or number", () => {
        let inputs = [69, {}, []];
        let output = false;
        let result = inputs.every(input => {
            isValidEnglishInput(input)
        })
        expect(result).toBe(output);
    });
});

describe("Testing isValidMorseInput()", () => {
    it("Should return true if input is .-", () => {
        let input = ".-";
        let output = true;
        let result = isValidMorseInput(input);
        expect(result).toBe(output);
    });
    it("Should return true if input is -... . .- - ... / -... -.-- / -.. .-. .", () => {
        let input = "-... . .- - ... / -... -.-- / -.. .-. .";
        let output = true;
        let result = isValidMorseInput(input);
        expect(result).toBe(output);
    });
    it("Should return false if input is \"-..................... . .- - ... / -... -.-- / -.. .-. .\"", () => {
        let input = "-..................... . .- - ... / -... -.-- / -.. .-. .";
        let output = false;
        let result = isValidMorseInput(input);
        expect(result).toBe(output);
    });
    it("Should return false if input is an array, object or number", () => {
        let inputs = [69, {}, []];
        let output = false;
        let result = inputs.every(input => {
            isValidMorseInput(input)
        })
        expect(result).toBe(output);
    });
});