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
    it("Should translateToMorse \"+ -\"\.=\"  to \"....\"", () => {
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
    it("Should translateToMorse \"-... . .- - ... / -... -.-- / -.. .-. .\"  to \"beats by dre\"", () => {
        let input = "-... . .- - ... / -... -.-- / -.. .-. .";
        let output = "beats by dre";
        let result = translateToEnglish(input);
        expect(result).toBe(output);
    });
});


describe("Testing isValidEnglishInput()", () => {
    it("Should return true if input is \"Hello\"", () => {
        let input = "Hello";
        let output = true;
        let result = isValidEnglishInput(input);
        expect(result).toBe(output);
    });
    it("Should return true if input is \".-\"", () => {
        let input = ".-";
        let output = true;
        let result = isValidMorseInput(input);
        expect(result).toBe(output);
    });
    it("Should return true if input is \"-... . .- - ... / -... -.-- / -.. .-. .\"", () => {
        let input = "-... . .- - ... / -... -.-- / -.. .-. .";
        let output = true;
        let result = isValidMorseInput(input);
        expect(result).toBe(output);
    });
    it("Should return true if input is \"-..................... . .- - ... / -... -.-- / -.. .-. .\"", () => {
        let input = "-..................... . .- - ... / -... -.-- / -.. .-. .";
        let output = false;
        let result = isValidMorseInput(input);
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
});