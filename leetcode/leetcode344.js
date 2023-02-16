/*
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function(s) {
  for (let i = 0; i < s.length / 2; i++) {
    let iB = s.length - i - 1;
    let a = s[i];
    s[i] = s[iB];
    s[iB] = a;
  }
};

let string = ["h", "e", "l", "l", "o"];
reverseString(string);
console.log(string);
