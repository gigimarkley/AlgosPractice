//given 2D array, 9x9
//check if valid or not

//check row (arr[index]), check col (arr[index][index]), check 3x3 blocks (increment one direction +3) => for that number
//keep track of visited vs unvisited => change to 0s once checked
//keep track of rows, columns, squares
//1. check if rows are good
//2. check if columns are good
//3.check if box/squares are good

function sudokuChecker(gameArr) {
  let n = 9;
  let boxTracker = { 0: {}, 3: {}, 6: {} }; //The three objects represent groups of three rows
  let colTracker = {}; //keep track of numbers in columns

  //increments through rows
  for (let i = 0; i < n; i++) {
    let rowTracker = {}; //keep track of numbers found in current row
    let boxRow = 3 * Math.floor(i / 3);
    //increments across row
    for (let j = 0; j < n; j++) {
      let currNum = gameArr[i][j];

      //found the number already in the row
      if (rowTracker[currNum]) {
        return false;
      } else {
        rowTracker[gameArr[i][j]] = 1;
      }

      if (colTracker[currNum]) {
        //found number already in the column
        if (colTracker[currNum][j]) {
          return false;
        } else {
          colTracker[currNum][j] = 1;
        }
      } else {
        colTracker[currNum] = {};
        colTracker[currNum][j] = 1;
      }

      let boxCol = 3 * Math.floor(j / 3);

      //check if box is in boxTracker yet
      if (boxTracker[boxRow][boxCol]) {
        //found number in boxTracker
        if (boxTracker[boxRow][boxCol][currNum]) {
          return false;
        } else {
          boxTracker[boxRow][boxCol][currNum] = 1;
        }
      } else {
        boxTracker[boxRow][boxCol] = {};
        boxTracker[boxRow][boxCol][currNum] = 1;
      }
    }
  }
  return true;
}

let game1 = [
  [7, 9, 2, 1, 5, 4, 3, 8, 6],
  [6, 4, 3, 8, 2, 7, 1, 5, 9],
  [8, 5, 1, 3, 9, 6, 7, 2, 4],
  [2, 6, 5, 9, 7, 3, 8, 4, 1],
  [4, 8, 9, 5, 6, 1, 2, 7, 3],
  [3, 1, 7, 4, 8, 2, 9, 6, 5],
  [1, 3, 6, 7, 4, 8, 5, 9, 2],
  [9, 7, 4, 2, 1, 5, 6, 3, 8],
  [5, 2, 8, 6, 3, 9, 4, 1, 7],
];
//true
let game2 = [
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
];
//false
let game3 = [
  [7, 9, 2, 1, 5, 4, 3, 8, 6],
  [6, 4, 3, 8, 2, 7, 1, 5, 9],
  [8, 5, 1, 3, 9, 6, 7, 2, 4],
  [2, 6, 5, 9, 7, 3, 8, 4, 1],
  [4, 8, 9, 5, 6, 1, 2, 7, 3],
  [7, 1, 7, 4, 8, 2, 9, 6, 5],
  [1, 3, 6, 7, 4, 8, 5, 9, 2],
  [9, 7, 4, 2, 1, 5, 6, 3, 8],
  [5, 2, 8, 6, 3, 9, 4, 1, 7],
];
//false
let game4 = [
  [7, 9, 2, 1, 5, 4, 3, 8, 6],
  [6, 4, 3, 8, 2, 7, 1, 5, 9],
  [8, 5, 7, 3, 9, 6, 1, 2, 4],
  [2, 6, 5, 9, 7, 3, 8, 4, 1],
  [4, 8, 9, 5, 6, 1, 2, 7, 3],
  [3, 1, 7, 4, 8, 2, 9, 6, 5],
  [1, 3, 6, 7, 4, 8, 5, 9, 2],
  [9, 7, 4, 2, 1, 5, 6, 3, 8],
  [5, 2, 8, 6, 3, 9, 4, 1, 7],
];
//false

console.log(sudokuChecker(game1));
console.log(sudokuChecker(game2));
console.log(sudokuChecker(game3));
console.log(sudokuChecker(game4));
