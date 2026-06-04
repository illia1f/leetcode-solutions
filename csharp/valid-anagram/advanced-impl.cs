using System.Text;

var solution = new Solution();

Console.WriteLine(solution.IsAnagram("anagram", "nagaram")); // true
Console.WriteLine(solution.IsAnagram("rat", "car")); // false
Console.WriteLine(solution.IsAnagram("ggii", "eekk")); // false
Console.WriteLine(solution.IsAnagram("aabb", "aaab")); // false
Console.WriteLine(solution.IsAnagram("e\u0301", "\u00E9")); // true: "e" + U+0301 combining accent vs precomposed e-acute U+00E9

public class Solution {
    public bool IsAnagram(string s, string t) {
        s = s.Normalize(NormalizationForm.FormC);
        t = t.Normalize(NormalizationForm.FormC);

        if (s.Length != t.Length)
        {
            return false;
        }

        var keyCounts = new Dictionary<Rune, int>(s.Length);
        foreach (var rune in s.EnumerateRunes())
        {
            keyCounts[rune] = keyCounts.GetValueOrDefault(rune) + 1;
        }

        foreach (var rune in t.EnumerateRunes())
        {
            keyCounts[rune] = keyCounts.GetValueOrDefault(rune) - 1;
        }

        return keyCounts.Values.All(v => v == 0);
    }
}
