/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  const arr = domains.concat();
  for (let i = 0; i < domains.length; i++) {
    const mas = domains[i].split('.').reverse();
    arr[i] = [];
    for (let j = 0; j < mas.length; j++) {
      if (j === 0) {
        arr[i][j] = `.${mas[j]}`;
      } else {
        arr[i][j] = `.${mas.slice(0, j + 1).join('.')}`;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] in res) {
        res[arr[i][j]] += 1;
      } else {
        res[arr[i][j]] = 1;
      }
    }
  }
  return res;
}

module.exports = getDNSStats;
