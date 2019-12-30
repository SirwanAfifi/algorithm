## Directions:

Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

## Examples

```
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
```

### Solution:

#### Method One:

1. Create empty array to hold chunks called `chunked`
2. For each element in the `unchunked` array
   1. Retrieve the last element in `chunked`
   2. **If** last element does not exist, or if its length is equal to chunk size
      1. Push a new chunk into `chunked` with the current element
   3. **Else** add the current element into the chunk

```js
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}
```

**NOTE**: Pushing items to `last` will also change the original array: `chunked`:

```js
const chunked = [[1, 2]];
const last = chunked[chunked.length - 1]; // This gives us [1, 2]
last.push(3); // Adds the new item to chunked [1, 2, 3]
```

#### Method Two:

1. Create empty 'chunked' array
2. Create `index` start at 0
3. While `index` is less than `array.length`
   1. Push a slice of length `size` from `array` into `chunked`
   2. Add `size` to `index`

```js
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}
```

#### Method Three:

```js
function chunk(array, size) {
  const chunked = [];
  const length = Math.ceil(array.length / size);
  [...Array(length).keys()].forEach((val, i) => {
    const start = size * i;
    chunked.push(array.slice(start, start + size));
  });
  return chunked;
}
```
