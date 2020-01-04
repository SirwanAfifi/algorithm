## Directions:

Write a function that returns the number of vowels used in a string. Vowels are the characters `a`, `e` `i`, `o`, and `u`.

## Examples:

```
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0
```

## Solutions:

1. Iterative:

```js
function vowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
```

2. Regular Expression:

```js
function vowels(str) {
  const pattern = /[aeiou]/gi;
  const result = str.toLowerCase().match(pattern);
  return (result && result.length) || 0;
}

// OR

function vowels(str) {
  const matches = str.toLowerCase().match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```
