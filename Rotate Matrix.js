/*
Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.
*/

let rotateMatrix = matrix => {
  if(matrix.length === 1) {
    return matrix;
  }

  var arr = [];
  for(var x = 0; x < matrix.length; x++) {
    var temp = []; 
    for(var y = matrix[0].length - 1; y >= 0; y--) {
      temp.push(matrix[y][x]);
    }
    arr.push(temp);
  }

  return arr;
};