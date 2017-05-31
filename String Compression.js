/*
Implement a method to perform basic string compression using the counts of repeated characters. For example, the string
aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your
method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).

Examples:
Input: 'aabcccccaaa'
Output: 'a2b1c5a3'

Input: 'abdhfffffff'
Output: 'a1b1d1h1f7'

Input: 'abcdef'
Output: 'abcdef'

Input: ''
Output: ''
*/

let stringCompression = str => {
  if (typeof str !== 'string') {
    return null;
  }

  let compressedStr = '';
  let currentCharCount = 1;

  for (let x = 0; x < str.length; x++) {
    let currentChar = str.charAt(x);
    let nextChar = str.charAt(x + 1);


    if (currentChar !== nextChar || x === str.length - 1) {
      compressedStr += currentChar + currentCharCount;
      currentCharCount = 1;
    }

    if (currentChar === nextChar) {
      currentCharCount++;
    }
  }

  if (compressedStr.length >= str.length) {
    return str;
  }

  return compressedStr;
};