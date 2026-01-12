/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) {
    return true;
  }

  var i = 0,
    count = 0;
  while (i < flowerbed.length) {
    if (flowerbed[i] === 0) {
      if (i === flowerbed.length - 1) {
        // Can plant if it's the only position OR left neighbor is empty
        if (i === 0 || flowerbed[i - 1] === 0) {
          count++;
        }
        break;
      }

      if (flowerbed[i + 1] === 0) {
        count++;
        i += 2;
      } else {
        i += 3; // Right has flower, skip to position after it
      }
    } else {
      i += 2;
    }
  }

  return count >= n;
};
