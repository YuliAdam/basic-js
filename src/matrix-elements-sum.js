const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
 let length = matrix[0].length;
 let sum = 0;
 for(let i = 0; i<length;i+=1){
  sum+=matrix[0][i];
 }
 for(let i=1;i<matrix.length;i+=1){
  for(let j=0;j<length;j+=1){
    if(matrix[i-1][j]!==0){
      sum+=matrix[i][j];
    }
  }
 }
 return sum;
}

module.exports = {
  getMatrixElementsSum
};
