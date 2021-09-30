# Review

## Goals

1. Working morse code translator - done
   - english to morse - done
   - morse to english - done
2. Practice using TDD - not done
   - Got some practice writing tests first but 17 pass 7 fail at the moment
   - You will need to get all your tests passing
3. Application of what you're learning (pure functions etc.) - Clean functions, and the app works - done
   ​

## Specification

​

- Translator functions and Unit tests to be written in separate files. Functions to be brought into the main.js and unit test files - close
  - Has written tests, data and pure functions in separate files but you have run into some problems importing and exporting which we will address below.
- Readme - done
  - Awesome readme!
  - Add a section about set up so if someone came to project they know how to get it and run the tests.
  ```bash
  # get project
  git clone project-url
  # go into project
  cd project-name
  # add dependcies
  npm install
  # run test scripts
  npm run test
  ```
- 10 commits during development
  - \>10 commits done. Judging by commit comments, they are of value.
- Mobile first/Responsive - done
  - Responsive and looks nice!
  - Look at if you add a large sentence to translate.
- No tutorials - done
  - This work looks original
    ​

## Overall

​A very nice morse code translator which works well, provides some feedback if the character you type isn't able to be translate and the styling is great. I love the light bulb, it is becoming your signature.

In terms of JS you have separated your files which is great. I like how you have began to strip your translator into different functions that are pure and you have started to test :). We just need to hook it all up again.
​
You have complete the extension which is great!

(.Y.) hahaha nice keep up the easter eggs.
​

## To work on

### Imports and Exports

In the `index.html` you need to update your script tag if you are using modules you have to specify it on the tag.

```html
<script src="main.js" type="module"></script>
```

Now you can remove all the duplicated code and use `import` statements now.

### House keeping

- You have node_modules on your git hub delete them
  - Your package.json is your list dependencies.
  - You will have to add a .gitignore with `node_modules` in it.
- Put all your js files in a js folder
- Get your tests working

### Array iterators

Come on mate give them a go! If you are using a for loop to create a new array map is your best friend.

Your code

```js
export const translateToMorse = str => {
  let solutionArray = [];
  let splitArray = str.toLowerCase().split("");
  for (let i = 0; i < splitArray.length; i++) {
    solutionArray.push(englishToMorse[splitArray[i]]);
    if (i != splitArray.length - 1) {
      solutionArray.push(" ");
    }
  }
  return solutionArray.join(" ");
};
```

could be

```js
export const translateToMorse = str => {
  let splitArray = str.toLowerCase().split("");
  let solutionArray = splitArray.map((character, index, array) => {
    if (index != array.length - 1) {
      return englishToMorse[character] + " ";
    }
    return englishToMorse[character];
  });
};
```

Hey mate a lot of little things let me know if you want a hand or a further explanation.
