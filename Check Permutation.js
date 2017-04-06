// Given two strings, write a method to decide if one is a permutation of the other.

let checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return true;
  }

  let chars1 = countChars(str1);
  let chars2 = countChars(str2);

  for (let char in chars1) {
    if (chars1[char] !== chars2[char]) {
      return false;
    }
  }

  return true;
}

// Helper function
let countChars = (str) => {
  let chars = {};
  for (let x = 0; x < str.length; x++) {
    let char = str.charAt(x);
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }
  return chars;
}