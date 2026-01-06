/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var firstStr = strs[0];
  var i = 0,
    char = '';
  for (; i < firstStr.length; i++) {
    char = firstStr[i];
    if (!strs.every((s) => s[i] === char)) {
      return firstStr.substring(0, i);
    }
  }

  return firstStr.substring(0, i);
};
