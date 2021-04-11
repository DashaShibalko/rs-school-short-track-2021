/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const short = s1.length <= s2.length ? s1 : s2;
  const long = Array.from(short === s1 ? s2 : s1);
  let result = 0;

  for (let i = 0; i < short.length; i++) {
    const index = long.indexOf(short[i]);
    if (index !== -1) {
      result++;
      delete long[index];
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
