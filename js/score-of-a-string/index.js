/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    var sum = Math.abs(s.charCodeAt(0) - s.charCodeAt(1));
    for (var i = 1; i < s.length - 1; i++) {
        sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return sum;
};
