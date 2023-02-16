/*
 * The array-form of an integer num is an array representing its digits in left to right order.
 *
 * For example, for num = 1321, the array form is [1,3,2,1].
 * Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
 */

let addToArrayForm = function(num, k) {
  let kArr = convertNumberToArray(k);
  let maxLength = Math.max(num.length, kArr.length);

  let sumArr = [];
  let overflow = 0;
  for (let i = 0; i < maxLength; i++) {
    let arrVal = i < num.length ? num[num.length - 1 - i] : 0;
    let kArrVal = i < kArr.length ? kArr[kArr.length - 1 - i] : 0;

    let val = arrVal + kArrVal + overflow;
    overflow = 0;
    if (val < 10) {
      sumArr.push(val);
    } else {
      sumArr.push(parseInt(val.toString().substring(1)));
      overflow = 1;
    }
  }

  if (overflow > 0) {
    sumArr.push(overflow);
  }

  return sumArr.reverse();

  function convertNumberToArray(num) {
    let numString = num.toString();
    let numArray = [];
    for (let i = 0; i < numString.length; i++) {
      numArray.push(parseInt(numString[i]));
    }
    return numArray;
  }
};

let output = addToArrayForm([1, 2, 3], 191);
console.log(output);
