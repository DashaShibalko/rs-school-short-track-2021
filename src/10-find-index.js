/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, value) {
  let first = 0;
  let last = arr.length - 1;
  let middle;
  let position = -1;
  let found = false;
  while (first <= last && found === false) {
    middle = Math.floor((last + first) / 2);
    if (value === arr[middle]) {
      found = true;
      position = middle;
    } else if (value < arr[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
}

module.exports = findIndex;
