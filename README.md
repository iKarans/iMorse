# Morse Code Translator

## Introduction
A Morse Code Translator desgined using HTML, SCSS, CSS and Javascript using a mobile-first approach.

As you enter an english letter, it will automatically translate it to morse. This is done through adding an event listener to each key press. You can copy and paste into the translate box and hit enter to see the translation too. By clicking the arrows, you can have the same functionality but for translating from morse. It will translate to english after each spacebar press. There is a light bulb button to toggle light mode and a sound button to hear the morse code speech. The sound was implemented using a library called morseSynth by [netaction](https://github.com/netAction/morseSynth).

## Testing
* To run Unit Testing, use [jest](https://jestjs.io/).
* The tests can be found  in translator.test.js.
* ```# get project
git clone project-url
# go into project
cd project-name
# add dependcies
npm install
# run test scripts
npm run test ```

## Improvements / To Dos

* Make buttons switch on exchange arrow for larger screen.
* Add more tests.
