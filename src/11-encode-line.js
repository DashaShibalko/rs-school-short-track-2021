/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const s = str.split('');
  let k;
  for (let i = 0; i < s.length; i++) {
    k = i + 1;
    while (s[i] === s[k]) {
      k++;
    }
    if ((k - i) > 1) {
      s.splice(i, 0, (k - i));
      s.splice(i + 2, k - i - 1);
    }
  }
  return s.join('');
}

module.exports = encodeLine;
