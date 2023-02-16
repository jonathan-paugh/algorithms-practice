/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (value in map) {
      map[value] += 1;
    } else {
      map[value] = 1;
    }
    if (map[value] > Math.floor(nums.length / 2)) {
      return value;
    }
  }
};

console.log(majorityElement([1]));