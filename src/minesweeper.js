const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let minesweeper = [];
  for(let i = 0; i < rows; i += 1){
    const row = new Array(cols).fill(0);
    minesweeper.push(row);
  }
  for(let i = 0; i < rows; i += 1) {
    for(let j = 0; j < cols; j += 1) {
      if(matrix[i][j]) {
        for (let x = i - 1; x <= i + 1; x += 1) {
          for (let y = j - 1; y <= j + 1; y += 1) {
            if (x >= 0 && x < rows && y >= 0 && y < cols && !(x === i && y === j)){
              minesweeper[x][y] += 1;
            }
          }
        }
      }
    }
  }
  return minesweeper;
}

module.exports = {
  minesweeper
};
