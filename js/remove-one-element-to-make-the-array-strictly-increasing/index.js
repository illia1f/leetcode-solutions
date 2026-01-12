/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  var violatingIdx = -1;
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      if (violatingIdx !== -1) {
        return false;
      }
      violatingIdx = i;
    }
  }

  if (violatingIdx <= 0 || violatingIdx === nums.length - 2) {
    return true;
  }

  return (
    nums[violatingIdx - 1] < nums[violatingIdx + 1] ||
    nums[violatingIdx] < nums[violatingIdx + 2]
  );
};
