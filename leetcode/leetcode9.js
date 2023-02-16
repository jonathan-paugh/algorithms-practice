/*
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
  let numString = x.toString();
  for (let i = 0; i < numString.length / 2; i++) {
    if (numString[i] !== numString[numString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));