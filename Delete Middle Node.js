/*
Implement an algorithm to delete a node in the middle (i.e, any node but the first and last node,
not necessarily the exact middle) of a singly linked list, given only access to that node

Example:
Input: the node c from the linkedin list a -> b -> c -> d -> e -> f
Output: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f

Note: You are given the middleNode.
*/

let deleteMiddleNode = (middleNode) => {
  let nextNode = middleNode.next;

  middleNode.value = nextNode.value;
  middleNode.next = nextNode.next;

};