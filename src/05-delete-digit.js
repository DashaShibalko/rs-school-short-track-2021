/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = String(n).split('').map(Number);
  const min = Math.min(...number);
  const index = number.indexOf(min);

  number.splice(index, 1);
  return +number.join('');
}

module.exports = deleteDigit;
