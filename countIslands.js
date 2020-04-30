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