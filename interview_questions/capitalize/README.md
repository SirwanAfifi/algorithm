## Directions:

Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.

## Examples:

```
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'
```

## Solutions:

1. Easier to read:

```js
function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

// Or

function capitalize(str) {
  const capitalized = str
    .split(" ")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" ");
  return capitalized;
}
```

2. Challenging to read:

```js
function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    // If the left char is space
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
```
