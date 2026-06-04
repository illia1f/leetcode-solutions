var solution = new Solution();

Console.WriteLine(solution.IsAnagram("anagram", "nagaram")); // true
Console.WriteLine(solution.IsAnagram("rat", "car")); // false
Console.WriteLine(solution.IsAnagram("ggii", "eekk")); // false
Console.WriteLine(solution.IsAnagram("aabb", "aaab")); // false

public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length)
        {
            return false;
        }

        Span<int> counts = stackalloc int[26];
        for (int i = 0; i < s.Length; i++)
        {
            counts[s[i] - 'a']++;
            counts[t[i] - 'a']--;
        }

        foreach (int count in counts)
        {
            if (count != 0)
            {
                return false;
            }
        }

        return true;
    }
}
