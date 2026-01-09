/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var startIdx = 0,
    endIdx = nums.length - 1,
    midIdx = 0;
  while (startIdx <= endIdx) {
    midIdx = Math.floor((startIdx + endIdx) / 2);
    if (nums[midIdx] === target) {
      return midIdx;
    } else if (nums[midIdx] < target) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx - 1;
    }
  }

  return startIdx;
};
