/*
You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse
order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers returns as a linkedlist.

Examples:
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is , 617 + 295.
Output: (2 -> 1 -> 9). That is, 912.
*/

const sumLists = (head1, head2) => {
  let num1 = linkedListToNum(head1);
  let num2 = linkedListToNum(head2);
  let resultNum = num1 + num2;

  return numToLinkedList(resultNum);
};

const linkedListToNum = head => {
  let num = '';

  for (let pointer = head; pointer; pointer = pointer.next) {
    num = pointer.value + num;
  }

  return JSON.parse(num);
};

const numToLinkedList = num => {
  let strNum = JSON.stringify(num);
  let result = {};
  let pointer = result;

  for (let x = strNum.length - 1; x >= 1; x--, pointer = pointer.next) {
    pointer.value = JSON.parse(strNum.charAt(x));
    pointer.next = {};
  }

  pointer.value = JSON.parse(strNum.charAt(0));
  return result;
};
