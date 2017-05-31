/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
*/

let zeroMatrix = matrix => {
  if (!Array.isArray(matrix)) {
    return null;
  }

  for (let row = 0; row < matrix.length; row++) {
    let matrixRow = matrix[row];
    if (!Array.isArray(matrixRow)) {
      return null;
    }
  }

  matrix = matrix.slice();
  let change = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] === 0) {
        change.push([row, column]);
      }
    }
  }

  for (let x = 0; x < change.length; x++) {
    for (let column = 0, row = change[x][0]; column < matrix.length; column++) {
      matrix[row][column] = 0;
    }

    for (let row = 0, column = change[x][1]; row < matrix.length; row++) {
      matrix[row][column] = 0;
    }
  }

  return matrix;
};