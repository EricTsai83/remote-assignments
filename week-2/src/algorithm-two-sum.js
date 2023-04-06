// Given an array of integers, return indices of the two numbers such that they add up to a
// specific target. You may assume that each input would have exactly one solution, and you
// may not use the same element twice.
/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let leftDiff = target - nums[left];
    let rightDiff = target - nums[right];
    let resIdx;

    resIdx = nums.lastIndexOf(leftDiff);
    if (resIdx !== -1 && resIdx !== left) {
      return [left, resIdx];
    }
    resIdx = nums.indexOf(rightDiff);
    if (resIdx !== -1 && resIdx !== right) {
      return [right, resIdx];
    }

    left++;
    right--;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
