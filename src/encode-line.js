const { NotImplementedError } = require('../lib');

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
  strArr = str.split('');
  encStr = '';
  let count = 1;
  for (let i = 1; i < strArr.length + 1; i += 1) {
    if(strArr[i] === strArr[i - 1]) {
      count += 1;
      continue;
    }
    else{
      encStr += (count > 1 ? count : '') + strArr[i - 1];
      count = 1;
    }
  }
  return encStr;
}
module.exports = {
  encodeLine
};
