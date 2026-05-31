public class Solution {
    public int SearchInsert(int[] nums, int target) {
        return SearchInsert(target, nums, 0, nums.Length-1);
    }

    private static int SearchInsert(int target, int[] nums, int startIdx, int endIdx) {
        if (endIdx < startIdx) {
            return startIdx;
        }

        int middleIdx = (endIdx + startIdx) / 2;
        int middleValue = nums[middleIdx];
        if (middleValue == target) {
            return middleIdx;
        } else if (middleValue < target) {
            return SearchInsert(target, nums, middleIdx + 1, endIdx);
        } else {
            return SearchInsert(target, nums, startIdx, middleIdx - 1);
        }
    }
}