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
