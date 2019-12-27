## Directions

Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed. _Do_ include spaces and punctuation in determining if the string is a palindrome.

## Examples:

```js
palindrome("abba") === true;
palindrome("abcdefg") === false;
```

## Solutions

### By reversing an input:

```js
function palindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("");
  return reversed === str;
}
```

### Using `every` method: (Too many comparison)

> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
const arr = [0, 10, 14];
arr.every(val => val > 5);
```

```js
 -------------------
| a | b | c | b | a |
 -------------------
```

Every element should be equal with the element in the very end:

```
   a   ===   a
arr[0] === arr[4]

   b   ===   b
arr[1] === arr[3]

   c   ===   c
arr[2] === arr[2]
```

#### Code:

```js
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
```
