/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
  let arr1 = nums1.slice(0, m);

  let nums1Index = 0;
  let nums2Index = 0;
  for (let i = 0; i < m + n; i++) {
    if (nums1Index >= m) {
      nums1[i] = nums2[nums2Index++];
      continue;
    }

    if (nums2Index >= n) {
      nums1[i] = arr1[nums1Index++];
      continue;
    }

    let num1 = arr1[nums1Index];
    let num2 = nums2[nums2Index];

    if (arr1[nums1Index] <= nums2[nums2Index]) {
      nums1[i] = arr1[nums1Index++];
    } else {
      nums1[i] = nums2[nums2Index++];
    }
  }
};

let nums = [4, 0, 0, 0, 0, 0];
merge(nums, 1, [1, 2, 3, 5, 6], 5);
console.log(nums);
