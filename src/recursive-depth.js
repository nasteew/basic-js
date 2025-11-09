const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(arr.length === 0) {
      return 1;
    }
    else {
      let maxDepth = 1;
      let depth = 1;
      for (let element of arr) {
        if (Array.isArray(element)){
          depth = 1 + this.calculateDepth(element);
          if (depth > maxDepth) {
            maxDepth = depth;
          }
        }
      }
      return maxDepth;
    }
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
