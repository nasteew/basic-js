const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
let skipNext = false;
function transform(arr) {
  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if (arr.length === 0) {
    return arr;
  }
  let newArr = [...arr];
  let modArr = [];
  for (let i = 0; i < newArr.length; i += 1) {
    if(skipNext) {
      skipNext = false;
      continue;
    }
    switch(newArr[i]){
      case '--discard-next' : {
        if(i + 1 < newArr.length){
          skipNext = true;
          i += 1;
        }
        break;
      }
      case '--discard-prev' : {
        if(i - 1 >= 0 && !skipNext) {
          modArr.pop();
        }
        break;
      }
      case '--double-prev' : {
        if(i - 1 >= 0 && !skipNext){
          modArr.push(newArr[i-1]);
        }
        break;
      }
      case '--double-next' : {
        if(i + 1 < newArr.length){
          modArr.push(newArr[i+1]);
        }
        break;
      }
      default : {
        modArr.push(newArr[i]);
      }
    }
  }
  return modArr;
}

module.exports = {
  transform
};
