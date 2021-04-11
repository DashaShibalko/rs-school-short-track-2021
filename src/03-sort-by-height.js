/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const copyArr = arr.slice();
  const newArray = arr.slice().filter((item) => item !== -1).sort((a, b) => a - b);
  copyArr.forEach((item) => {
    if (item === -1) result.push(-1);
    else result.push(newArray.shift());
  });
  return result;
}

module.exports = sortByHeight;
