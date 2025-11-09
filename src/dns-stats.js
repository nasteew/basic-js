const { NotImplementedError } = require('../lib');

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
  let counts = {};
  for (let domain of domains) {
    let elements = domain.split('.').reverse();
    let current = '';
    for(let element of elements) {
      current += `.${element}`;
      if(counts[current]) {
        counts[current] += 1;
      }
      else {
        counts[current] = 1;
      }
    }
  }
  return counts;
}

module.exports = {
  getDNSStats
};
