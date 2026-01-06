/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var n = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[n]) {
      n++;
      nums[n] = nums[i];
    }
  }

  return n + 1;
};
