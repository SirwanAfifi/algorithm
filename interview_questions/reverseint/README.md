## Directions

Given an integer, return an integer that is the reverse ordering of numbers.

## Examples

```js
reverseInt(15) === 51;
reverseInt(981) === 189;
reverseInt(500) === 5;
reverseInt(-15) === -51;
reverseInt(-90) === -9;
```

## Keep these in mind:

- `Number.prototype.toString()`
- `parseInt()`
- `Math.sign()`
- Multiplying a positive number with -1 will give us a negative number (`n * -1`)

## Solutions

```js
function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
```
