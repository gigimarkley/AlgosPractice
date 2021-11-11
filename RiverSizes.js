// 10/07 River Sizes
// https://gist.github.com/mckennakayyy/58974a796aa4c9ca31416cebec0b345c

//given matrix of 0 and 1
//return array of the sizes of the rivers (1s)
//BFS => level by level

function riverSizes(matrix) {
  const sizes = [];
  //iterate through matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        //if num is 1, visit the river
        sizes.push(visitRiver(matrix, i, j));
      }
    }
  }
  return sizes;
}

function visitRiver(matrix, i, j) {
  //checking if coordinates are outside matrix or if it is 0
  if (
    i >= matrix.length ||
    j >= matrix[0].length ||
    i < 0 ||
    j < 0 ||
    !matrix[i][j]
  )
    return 0;
  matrix[i][j] = 0; //replace with a 0 because we visited it
  //1 is for the size of this first 1, we are running the coordinates around that one recursively and it will continue checking around themselves as well
  return (
    1 +
    visitRiver(matrix, i + 1, j) +
    visitRiver(matrix, i - 1, j) +
    visitRiver(matrix, i, j + 1) +
    visitRiver(matrix, i, j - 1)
  );
}

const matrixA = [
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 0, 1],
];
console.log(riverSizes(matrixA)); //should return [1, 1, 5]
const matrixB = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
console.log(riverSizes(matrixB)); //should return [1, 2, 2, 2, 5]
