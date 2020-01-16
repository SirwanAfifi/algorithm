## Linked Lists

A Linked List is an ordered collection of data, the collection contains a number of different nodes. Each node contains some amount of data along with a reference to the next node

<img src="./linkedlist.png" alt="linked list" />

So it's a list of linked nodes.

```js
const nodeOne = {
  data: 123
};

const nodeTwo = {
  data: 456
};

nodeOne.next = nodeTwo;
```

## Node Implementation

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```

## Linked List Implementation

```js
class LinkedList {
  constructor() {
    this.head = null;
  }

  // to be added
}
```

### InsertFirst

```js
class LinkedList {
  // as before

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}
```

### Size

```js
class LinkedList {
  // as before

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }
}
```

### GetFirst

```js
class LinkedList {
  // as before

  getFirst() {
    return this.head;
  }
}
```

### GetLast

```js
class LinkedList {
  // as before

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }
}
```
