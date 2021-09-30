import { englishToMorse, morseToEnglish } from "./data.js";
import { translateToMorse, isValidEnglishInput, translateToEnglish, isValidMorseInput } from "./translator.js";

const exchangeArrows = document.querySelector(".translater__arrows");
const languageOne = document.querySelector(".translater__language-1");
const languageTwo = document.querySelector(".translater__language-2");
const outputOne = document.querySelector(".translater__output-1");
const outputOneB = document.querySelector(".translater__output-1b");
const outputTwo = document.querySelector(".translater__output-2");
const soundIcon = document.querySelector(".translater__sound");
const lightIcon = document.querySelector(".translater__light");
const body = document.querySelector("body");

lightIcon.addEventListener("click", () => {
    body.classList.toggle("grey");
    languageTwo.classList.toggle("light");
    outputOne.classList.toggle("light");
    outputOneB.classList.toggle("light");
    outputTwo.classList.toggle("light");
    exchangeArrows.classList.toggle("blackfont");
})

soundIcon.addEventListener("click", () => {
    const morse = new morseSynth();
    if (languageOne.innerText == "English") {
        morse.play(outputOne.value);
    } else {
        morse.play(outputTwo.innerText);
    }
});

exchangeArrows.addEventListener("click", () => {
    if(languageOne.innerText == "English") {
        languageOne.innerText = "Morse";
        languageTwo.innerText = "English";
        outputOne.style.display = "none";
        outputOneB.style.display = "inline-block";

    } else {
        languageOne.innerText = "English";
        languageTwo.innerText = "Morse";
        outputOne.style.display = "inline-block";
        outputOneB.style.display = "none";
    }
    outputOne.value = "";
    outputOneB.value = "";
    outputTwo.innerText = "";
});





outputOne.addEventListener("keyup", (e) => {
    if (e.code == "Enter") {
        outputOne.value = outputOne.value.slice(0, -1);
        if(isValidEnglishInput(outputOne.value)) {
            outputTwo.innerText = translateToMorse(outputOne.value);
        } else {
            alert("That is an invalid input.");
            console.log(outputOne.value);
            outputOne.value = ""
            outputTwo.innerText = translateToMorse(outputOne.value);
        }
    }
    if(isValidEnglishInput(outputOne.value)) {
        outputTwo.innerText = translateToMorse(outputOne.value);
    } else {
        alert("That is an invalid.");
        outputOne.value = outputOne.value.slice(0, -1);
        outputTwo.innerText = translateToMorse(outputOne.value);
    }
});

outputOneB.addEventListener("keyup", e => {
    if (e.code === "Space") {
        if(isValidMorseInput(outputOneB.value.slice(0, -1))) {
            outputTwo.innerText = translateToEnglish(outputOneB.value);
        } else {
            alert("That is an invalid input.");
            let temp = outputOneB.value.split(" ");
            temp.pop();
            temp.pop();
            outputOneB.value = temp.join(" ");
            outputTwo.innerText = translateToEnglish(outputOneB.value);
        };
    } else if (e.code == "Backspace") {
        let temp = outputOneB.value.split(" ");
        temp.pop()
        outputOneB.value = temp.join(" ");
        outputTwo.innerText = translateToEnglish(outputOneB.value);
    } else if (e.code == "Enter") {
        outputOneB.value = outputOneB.value.slice(0, -1)
        outputTwo.innerText = translateToEnglish(outputOneB.value);
    }
});


