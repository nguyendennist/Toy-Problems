/*
Write code to remove duplicates from an unsorted linkedin list.

Examples:
Input:
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

Output:
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

Input:
{
  value: 5,
  next: {
    value: 5,
    next: {
      value: 15,
      next: null
    }
  }
}

Output:
{
  value: 5,
  next: {
    value: 15,
    next: null
  }
}
*/

const removeDups = head => {
  if (typeof head !== 'object') {
    return head;
  }

  let copy = JSON.parse(JSON.stringify(head));
  let copyValues = {};
  let copyFirstValue = JSON.stringify(copy.value);
  copyValues[copyFirstValue] = true;
  let pointer = copy;

  while (pointer.next) {
    let stringValue = JSON.stringify(pointer.next.value);

    if (copyValues[stringValue]) {
      pointer.next = pointer.next.next;
    } else {
      copyValues[stringValue] = true;
      pointer = pointer.next;
    }
  }

  return copy;
};
