## Directions:

Given a string, return the character that is most commonly used in the string.

## Examples:

```js
maxChar("abcccccccd") === "c";
maxChar("apple 1231111") === "1";
```

## Solution:

### Using `for`, `if`:

1. First you should trun the input into an object (character map):

```
"Hello There!"

 To:

 {
    H: 1,
    e: 3,
    l: 2,
    o: 1,
    ' ': 1,
    T: 1,
    h: 1,
    r: 1,
    '!': 1
}
```

### How?

```js
const string = "Hello There!";
const charMap = {};
for (let char of string) {
  // chars[char] = chars[char] + 1 || 1
  if (!charMap[char]) {
    charMap[char] = 1;
  } else {
    charMap[char]++;
  }
}
```

2. Find the character that most frequently used:

```js
function maxChar(str) {
  // as before
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
```

### Full code:

```js
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
```

### Using `reduce`:

1. First you should trun the input into an object (character map):

```js
const charMap = str.split("").reduce((acc, val) => {
  if (!acc[val]) {
    acc[val] = 1;
  } else {
    acc[val]++;
  }
  return acc;
}, {});
```

2. Find the character that most frequently used:

```js
const result = Object.entries(charMap).reduce((prev, current) => {
  return prev[1] > current[1] ? prev : current;
});
```

### Full code:

```js
function maxChar(str) {
  const charMap = str.split("").reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 1;
    } else {
      acc[val]++;
    }
    return acc;
  }, {});

  const result = Object.entries(charMap).reduce((prev, current) => {
    return prev[1] > current[1] ? prev : current;
  });

  return result[0];
}
```
