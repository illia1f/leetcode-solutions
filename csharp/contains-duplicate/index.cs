var sol = new Solution();

Console.WriteLine(sol.ContainsDuplicate([1,2,3,1]));
Console.WriteLine(sol.ContainsDuplicate([1,2,3,4]));
Console.WriteLine(sol.ContainsDuplicate([1,1,1,3,3,4,3,2,4,2]));

public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        return new HashSet<int>(nums).Count != nums.Length;
    }
}
