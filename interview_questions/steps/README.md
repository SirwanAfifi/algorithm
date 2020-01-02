## Directions:

Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character. Make sure the step has spaces on the right hand side!

## Examples:

````
  steps(2)
      '# '
      '##'
  steps(3)
      '#  '
      '## '
      '###'
  steps(4)
      '#   '
      '##  '
      '### '
      '####'
      ```
````

## Solutions:

### Iterative

1.Simple:

```js
for (let i in [...Array(n)]) {
  console.log("#".repeat(Number(i) + 1).padEnd(n, " "));
}
```

2.Hard (\*\*We figured this out by finding a pattern)

- From 0 to n (iterate through rows)
  - Create an empty string, `stair`
  - From 0 to n (iterate through columns)
  - **IF** the current column is equal to or less than the current row
    - Add a `#` to `stair`
- **ELSE**

  - Add a space to `stair`

- Console log `stair`

\*\* For example for `n = 3`

|                                    |                                    |                                    |
| ---------------------------------- | :--------------------------------: | ---------------------------------: |
| # <sup><small>r0, c0</small></sup> | - <sup><small>r0, c1</small></sup> | - <sup><small>r0, c2</small></sup> |
| # <sup><small>r1, c0</small></sup> | # <sup><small>r1, c1</small></sup> | - <sup><small>r1, c2</small></sup> |
| # <sup><small>r2, c0</small></sup> | # <sup><small>r2, c1</small></sup> | # <sup><small>r2, c2</small></sup> |

As you can see there's a pattern here:

- If `c` has a value that is equal to or less than `r` then we have `#`
- If `c` has a value greater than `r` then we have `-`

So:

```js
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
}
```

### Recursive

- If (row === n) then we have hit the end of our problem
- If the `stair` string has a length === n then we are at the end of a row
- If the _length_ of the `stair` string is less than or equal to the row number we're working on, we add a `#`, otherwise add a space

For example for `n = 3`

|     |     |     |
| --- | :-: | --: |
| #   |  -  |   - |
| #   |  #  |   - |
| #   |  #  |   # |

So:

```js
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}
```
