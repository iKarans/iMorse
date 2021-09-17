import { translate, isValidInput } from "./translator";

describe("Testing translate()", () => {
    it("Should translate \"h\"  to \"....\"", () => {
        let input = "h";
        let output = "....";
        let result = translate(input);
        expect(result).toBe(output);
    });
    it("Should translate \"H\"  to \"....\"", () => {
        let input = "H";
        let output = "....";
        let result = translate(input);
        expect(result).toBe(output);
    });
    it("Should translate \"+ -\"\.=\"  to \"....\"", () => {
        let input = "+ -\".=";
        let output = ".-.-. / -....- .-..-. .-.-.- -...-";
        let result = translate(input);
        expect(result).toBe(output);
    });
    it("Should translate \"Hello\"  to \".... . .-.. .-.. ---\"", () => {
        let input = "Hello";
        let output = ".... . .-.. .-.. ---";
        let result = translate(input);
        expect(result).toBe(output);
    });
    it("Should translate \"Japan\"  to \".--- .- .--. .- -.\"", () => {
        let input = "Japan";
        let output = ".--- .- .--. .- -.";
        let result = translate(input);
        expect(result).toBe(output);
    });
    it("Should translate \"Apple pencil\"  to \".- .--. .--. .-.. . / .--. . -. -.-. .. .-..\"", () => {
        let input = "Apple pencil";
        let output = ".- .--. .--. .-.. . / .--. . -. -.-. .. .-..";
        let result = translate(input);
        expect(result).toBe(output);
    });
    xit("Should translate \"-... . .- - ... / -... -.-- / -.. .-. .\"  to \"beats by Dre\"", () => {
        let input = "-... . .- - ... / -... -.-- / -.. .-. .";
        let output = "beats by Dre";
        let result = translate(input);
        expect(result).toBe(output);
    });
});


describe("Testing isValidInput()", () => {
    it("Should return true if input is \"Hello\"", () => {
        let input = "Hello";
        let output = true;
        let result = isValidInput(input);
        expect(result).toBe(output);
    });
    it("Should return true if input is \"-... . .- - ... / -... -.-- / -.. .-. .\"", () => {
        let input = "-... . .- - ... / -... -.-- / -.. .-. .";
        let output = true;
        let result = isValidInput(input);
        expect(result).toBe(output);
    });
    it("Should return false if input is \"ちんちん\"", () => {
        let input = "ちんちん";
        let output = false;
        let result = isValidInput(input);
        expect(result).toBe(output);
    });
    it("Should return false if input is \"[]\"", () => {
        let input = "[]";
        let output = false;
        let result = isValidInput(input);
        expect(result).toBe(output);
    });
    it("Should return false if input is \"{}\"", () => {
        let input = "[]";
        let output = false;
        let result = isValidInput(input);
        expect(result).toBe(output);
    });
});