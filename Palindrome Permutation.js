/*
Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that
is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be
limited to just dictionary words.

Example
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)
 */

let palindromePermutation = (str) => {
  str = str.toLowerCase();
  let chars = {};
  let oddNumChars = 0;

  for (let x = 0; x < str.length; x++) {
    let char = str.charAt(x);
    if (chars[char]) {
      chars[char]++;
    }
    if (!chars[char] && char !== " ") {
      chars[char] = 1;
    }
  }

  for (let char in chars) {
    if (chars[char] % 2) {
      oddNumChars++;
    }
    if (oddNumChars >= 2) {
      return false;
    }
  }

  return true;
}