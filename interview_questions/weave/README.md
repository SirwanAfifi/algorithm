## Directions

1.  Complete the task in weave/queue.js:

### Directions

Implement a 'peek' method in this Queue class. Peek should return the last element (the next one to be returned) from the queue _without_ removing it.

2.  Implement the 'weave' function.

### Directions

Weave receives two queues as arguments and combines the contents of each into a new, third queue. The third queue should contain the _alterating_ content of the two queues. The function should handle queues of different lengths without inserting 'undefined' into the new one. _Do not_ access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.

## Example

```js
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add("Hi");
queueTwo.add("There");
const q = weave(queueOne, queueTwo);
q.remove(); // 1
q.remove(); // 'Hi'
q.remove(); // 2
q.remove(); // 'There'
```

## Solution:

```js
function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}
```
