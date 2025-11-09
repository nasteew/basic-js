const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const separator = options.separator ?? '+';
  const additionSeparator = options.additionSeparator ?? '|';
  let addition = options.addition !== undefined ? options.addition : '';
  let additionRepeatTimes = options.additionRepeatTimes ?? 1;
  let repeatTimes = options.repeatTimes ?? 1;
  if (typeof str !== 'string') {
    str = String(str);
  }
  if (typeof addition !== 'string') {
    addition = String(addition);
  }
  if(!Number.isInteger(additionRepeatTimes)){
    additionRepeatTimes = 1;
  }
  if(!Number.isInteger(repeatTimes)){
    repeatTimes = 1;
  }
  const fullAddition = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return Array(repeatTimes).fill(str + fullAddition).join(separator);
}

module.exports = {
  repeater
};
