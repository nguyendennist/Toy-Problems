/*
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
Can you do this in place?
*/

let rotateMatrix = matrix => {
  matrix = matrix.slice();
  let matrixLen = matrix.length;
  let rows;
  let columns;

  if (matrixLen % 2 === 0) {
    rows = matrixLen / 2;
    columns = rows;
  } else {
    rows = Math.floor(matrixLen / 2);
    columns = rows;
  }

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      let topLeft = matrix[row][column];
      let topRight = matrix[column][matrixLen - 1 - row];
      let bottomRight = matrix[matrixLen - 1 - row][matrixLen - 1 - column];
      let bottomLeft = matrix[matrixLen - 1 - column][row];
      matrix[row][column] = bottomLeft;
      matrix[column][matrixLen - 1 - row] = topLeft;
      matrix[matrixLen - 1 - row][matrixLen - 1 - column] = topRight;
      matrix[matrixLen - 1 - column][row] = bottomRight;
    }
  }

  if (matrixLen % 2 === 1) {
    for (let row = 0; row < rows; row++) {
      let top = matrix[row][columns];
      let right = matrix[columns][matrixLen - 1 - row];
      let bottom = matrix[matrixLen - 1 - row][columns];
      let left = matrix[columns][row];
      matrix[row][columns] = left;
      matrix[columns][matrixLen - 1 - row] = top;
      matrix[matrixLen - 1 - row][columns] = right;
      matrix[columns][row] = bottom;
    }
  }

  return matrix;
};