const { NotImplementedError } = require('../lib');

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
  let num = n.toString();
  let max = 0;
  for (let i = 0; i < num.length; i += 1) {
    let temp = Number(num.slice(0, i) + num.slice(i + 1));
    if(temp > max) {
      max = temp;
    }
  }
  return  max;
}

module.exports = {
  deleteDigit
};
