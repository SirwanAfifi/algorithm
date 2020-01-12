## Queue

Array in JavaScript is a super hyper functional in nature so that we can implement a queue with it:

| Queue             | Array Equivalent |
| ----------------- | :--------------: |
| Add to queue      | array.unshift(); |
| Remove from queue |   array.pop();   |

### Other Array's methods

- `shift`
- `unshift`
- `push`
- `pop`
- `splice`
- `slice`

We only need `unshift` and `pop` to implement a queue so in the end:

| To...                               |         Run This         |
| ----------------------------------- | :----------------------: |
| Create a new, empty queue           | `const q = new Queue();` |
| Add a record to a queue             |       `q.add(1);`        |
| Remove record at the end of a queue |      `q.remove();`       |

## Implementation

### Description

Create a queue data structure. The queue should be a class with methods 'add' and 'remove'. Adding to the queue should store an element until it is removed

### Examples

```js
const q = new Queue();
q.add(1);
q.remove(); // returns 1;
```
