function getNumberOfIslands(binaryMatrix) {
  // your code goes here
  
  let islandCount = 0;
  let rows = binaryMatrix.length;
  let cols = binaryMatrix[0].length;
  
  const checkSurroundingSquares = (row, col) => {
    if (row < 0 || row > rows - 1 || col < 0 || col > cols - 1) {
      return;
    }
    
    if (binaryMatrix[row][col] === 1) {
      binaryMatrix[row][col] = 0;
      checkSurroundingSquares(row, col - 1)
      checkSurroundingSquares(row, col + 1)
      checkSurroundingSquares(row - 1, col)
      checkSurroundingSquares(row + 1, col)
    }
  }
  
  //loop through the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (binaryMatrix[i][j] === 1) {
        islandCount++;
        checkSurroundingSquares(i, j);
      }
    }
  }
  
     
  return islandCount;
}

function getNumberOfIslands(binaryMatrix) {
  const rows = binaryMatrix.length;
  const cols = binaryMatrix[0].length;
  let islandCount = 0;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (binaryMatrix[row][col] === 1) {
        islandCount++;
        markIsland(binaryMatrix, row, col)
      }
    }
  }
  
  return islandCount;
}

function markIsland(matrix, row, col) {
  
  let q = [[row, col]];
  
  while (q.length) {
    [currRow, currCol] = q.pop();
    
    if (matrix[currRow][currCol] === 1) {
      matrix[currRow][currCol] = -1;
      pushIfValid(matrix, q, currRow - 1, currCol)
      pushIfValid(matrix, q, currRow + 1, currCol)
      pushIfValid(matrix, q, currRow, currCol + 1)
      pushIfValid(matrix, q, currRow, currCol - 1)
    }
  }
}

function pushIfValid(matrix, q, row, col) {
  if (row >= 0 && row < matrix.length && col >=0 && col < matrix[0].length) {
    q.unshift([row, col])
  }
}
