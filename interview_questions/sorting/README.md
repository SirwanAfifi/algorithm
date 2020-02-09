## Directions

## Implement bubbleSort, selectionSort, and mergeSort

<img src="./sorting.jpg" alt="Sorting Algorithms" />

### bubbleSort

- From `i = 0` to array length
  - From `j = 0` to (array length - `i`)
    - If the element at `j` is greater than `j + 1`
      - Swap elements at `j` and `j + 1`

### Solution

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}
```

### selectionSort

- From `i = 0` to array.length
  - Assume the element at `i` is the least in the array, assign `i` to `indexOfMin`
  - For `j` from `i + 1` to end array
    - See if there is an element with lower value
      - If there is, record its index
  - If the index of the current element and the index of the `lowest` element is not the same, swap em

### Solution

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indeOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indeOfMin]) {
        indeOfMin = j;
      }
    }

    if (indeOfMin !== i) {
      const lesser = arr[indeOfMin];
      arr[indeOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}
```

### mergeSort

- Create `results` array
- While there are still elements in both arrays
  - If the first element the left half is less than first in right half
    - `shift` the element from left into `results` arr
  - else
    - `shift` the element from right into `results` arr
- Take everything from the array that still has stuff in it and put it in `results`

### Solution

```js
```
