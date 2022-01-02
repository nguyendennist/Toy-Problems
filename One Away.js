/*
There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a
character. Given two strings, write a function to check if they are one edit (or zero edits) away.

Examples
Input: pale, ple
Output: true

Input: pales, pale
Output: true

Input: pale, bale
Output: true

Input: pale, bake
Output: false
*/

const oneAway = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return null;
  }

  if (str1 === str2) {
    return true;
  }

  let length1 = str1.length;
  let length2 = str2.length;

  let differentCharLength = Math.abs(length1 - length2);
  if (differentCharLength > 1) {
    return false;
  }

  if (differentCharLength === 0) {

    let differentChars = 0;

    for (let x = 0; x < length1; x++) {
      if (str1.charAt(x) !== str2.charAt(x)) {
        differentChars++;
      }
    }

    if (differentChars > 1) {
      return false;
    }

  } else {

    let commonChars = 0;
    let smallestStr;
    let longestStr;

    if (length1 < length2) {
      smallestStr = str1;
      longestStr = str2;
    } else {
      smallestStr = str2;
      longestStr = str1;
    }

    for (let x = 0; x < smallestStr.length; x++) {
      if (smallestStr.charAt(x) === longestStr.charAt(x) || smallestStr.charAt(x) === longestStr.charAt(x + 1)) {
        commonChars++;
      }
    }

    if (commonChars !== smallestStr.length) {
      return false;
    }

  }

  return true;
};
