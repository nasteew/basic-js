const { NotImplementedError } = require('../lib');

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
function sort(sorted) {
  if(sorted.length <= 1) {
    return sorted;
  }
  const middle = Math.floor(sorted.length / 2);
  const left = sortByHeight(sorted.slice(0, middle));
  const right = sortByHeight(sorted.slice(middle));
  let res = [];
  let i = 0;
  let j = 0;
  while(i < left.length && j < right.length) {
    if(left[i] < 0) {
      res.push(left[i]);
      i += 1;
    }
    else if(right[j] < 0) {
      res.push(right[j]);
      j += 1;
    }
    else if(left[i] < right[j]){
      res.push(left[i]);
      i += 1;
    }
    else {
      res.push(right[j]);
      j += 1;
    }
  }
  return res.concat(left.slice(i)).concat(right.slice(j));
}
function sortByHeight(arr) {
  const sorted = arr.filter(x => x !== -1);
  const sortedArr = sort(sorted);
  let res = [];
  let index = 0;
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === -1) {
      res.push(-1);
    }
    else {
      res.push(sortedArr[index]);
      index += 1;
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
