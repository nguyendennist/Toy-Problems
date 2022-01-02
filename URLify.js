/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space
at the end to hod the additional characters, and that you are given the "true" length of the string. (Note: If
implementing in Java, please use a character array so that you can perform this operation in place.)

Example
Input: "Mr John Smith     ", 13
Output: "Mr%20JohnSmith"
*/

const URLify = (str, strLen) => {
  if (typeof str !== 'string' || typeof strLen !== 'number') {
    return null;
  }

  return str.substring(0, strLen).replace(/\s/g, '%20')
};
