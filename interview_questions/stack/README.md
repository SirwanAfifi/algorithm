## Directions

Create a stack data structure. The stack should be a class with methods 'push', 'pop', and 'peek'. Adding an element to the stack should store it until it is removed.

## Examples

```js
const s = new Stack();
s.push(1);
s.push(2);
s.pop(); // returns 2
s.pop(); // returns 1
```

## Solution

```js
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
```
