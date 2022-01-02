/*
Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that
is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be
limited to just dictionary words.

Example
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)
*/

const palindromePermutation = str => {
  if (typeof str !== 'string') {
    return null;
  }

  str = str.toLowerCase();
  const chars = countChars(str);
  let oddNumChars = 0;

  for (let char in chars) {
    if (chars[char] % 2) {
      oddNumChars++;
    }
    if (oddNumChars >= 2) {
      return false;
    }
  }

  return true;
};

const countChars = str => {
  const chars = {};

  for (let x = 0; x < str.length; x++) {
    let char = str.charAt(x);
    if (chars[char]) {
      chars[char]++;
    }
    if (!chars[char] && char !== " ") {
      chars[char] = 1;
    }
  }

  return chars;
};

console.log(palindromePermutation('racecar')); // true
console.log(palindromePermutation('aaccerr')); // true
console.log(palindromePermutation('hannah')); // true
console.log(palindromePermutation('ham mam')); // false
console.log(palindromePermutation('oovoo')); // true
console.log(palindromePermutation('home')); // false
console.log(palindromePermutation('r')); // true
console.log(palindromePermutation('rv')); // false
console.log(palindromePermutation('rvvr')); // true
