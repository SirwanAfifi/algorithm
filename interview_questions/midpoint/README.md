## Directions

Return the 'middle' node of a linked list. If the list has an even number of elements, return the node at the end of the first half of the list. _Do not_ use a counter variable, _do not_ retrieve the size of the list, and only iterate through the list one time.

## Example

```js
const l = new LinkedList();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
midpoint(l); // returns { data: 'b' }
```

## Solution
