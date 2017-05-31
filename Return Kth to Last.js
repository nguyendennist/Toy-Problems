/*
Implement an algorithm to find the kth to last element of a singly linked list.

Examples:
Input: 
2,
{
  value: 5,
  next: {
    value: 10,
    next: {
      value: 15,
      next: null
    }
  }
}

Output: 10

Input:
4,
{
  value: [1, 2, 3],
  next: {
    value: 45,
    next: {
      value: 10,
      next: {
        value: 60,
        next: null
      }
    }
  }
}

Output: 1
*/

let returnKthToLast = (kthToLast, head) => {
  if (typeof kthToLast !== 'number' || typeof head !== 'object') {
    return null;
  }

  let array = [];
  let arrayLen = array.length;

  for (let pointer = linkedList; pointer; pointer = pointer.next) {
    let value = pointer.value;
    array.push(value);
  }

  return kthToLast !== 0 ? array[arrayLen - kthToLast] : array[arrayLen - 1];
};