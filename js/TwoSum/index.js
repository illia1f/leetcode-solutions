/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = new Map();
  var value = 0,
    complement = 0;
  for (var i = 0; i < nums.length; i++) {
    value = nums[i];
    complement = target - value;
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }

    map.set(value, i);
  }
};
