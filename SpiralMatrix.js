//https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/

//given 2D array of integers
//right, down, left, up, repeat
//return array

function spiralOrder(matrix) {
  let results = [];
  if (matrix.length === 0) return results;

  let colStart = 0;
  let rowStart = 0;
  let colEnd = matrix[0].length - 1;
  let rowEnd = matrix.length - 1;

  while (colEnd > colStart && rowEnd > rowStart) {
    //until pointers meet
    for (let j = colStart; j < colEnd; j++) {
      //increment across row
      results.push(matrix[rowStart][j]);
    }

    for (let k = rowStart; k < rowEnd; k++) {
      //increment down col
      results.push(matrix[k][colEnd]);
    }

    for (let l = colEnd; l > colStart; l--) {
      //increment left across row
      results.push(matrix[rowEnd][l]);
    }

    for (let m = rowEnd; m > rowStart; m--) {
      //increment up col
      results.push(matrix[m][colStart]);
    }
    colStart++;
    rowStart++;
    rowEnd--;
    colEnd--;
  }

  return results;
}

let a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(spiralOrder(a));
//1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

let b = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
console.log(spiralOrder(b));
//1 2 3 4 8 12 16 20 19 18 17 13 9 5 6 7 11 15 14 10
