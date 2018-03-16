/*


	Sudoku Background
	Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all 
	cells of the grid with digits from 1 to 9, so that each column, each row, 
	and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9. 
	(More info at: http://en.wikipedia.org/wiki/Sudoku)

	Sudoku Solution Validator
	Write a function validSolution/ValidateSolution/valid_solution() that accepts 
	a 2D array representing a Sudoku board, and returns true if it is a valid solution, 
	or false otherwise. The cells of the sudoku board may also contain 0's, 
	which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

	The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

	Examples
	validSolution([
	  [5, 3, 4, 6, 7, 8, 9, 1, 2],
	  [6, 7, 2, 1, 9, 5, 3, 4, 8],
	  [1, 9, 8, 3, 4, 2, 5, 6, 7],
	  [8, 5, 9, 7, 6, 1, 4, 2, 3],
	  [4, 2, 6, 8, 5, 3, 7, 9, 1],
	  [7, 1, 3, 9, 2, 4, 8, 5, 6],
	  [9, 6, 1, 5, 3, 7, 2, 8, 4],
	  [2, 8, 7, 4, 1, 9, 6, 3, 5],
	  [3, 4, 5, 2, 8, 6, 1, 7, 9]
	]); // => true
	validSolution([
	  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
	  [6, 7, 2, 1, 9, 0, 3, 4, 8],
	  [1, 0, 0, 3, 4, 2, 5, 6, 0],
	  [8, 5, 9, 7, 6, 1, 0, 2, 0],
	  [4, 2, 6, 8, 5, 3, 7, 9, 1],
	  [7, 1, 3, 9, 2, 4, 8, 5, 6],
	  [9, 0, 1, 5, 3, 7, 2, 1, 4],
	  [2, 8, 7, 4, 1, 9, 6, 3, 5],
	  [3, 0, 0, 4, 8, 1, 1, 7, 9]
	]); // => false


*/




function validSolution(board){
  return checkSudoku(board);
}




function checkSudoku(board){

  //check columns, each column change into 9 elements table (when change we treat this table as row) and then check if is valid
  //in the meantime check each row (row ROW) if is valid
  var columns = [];
  for(let i=0;i<board.length;i++){
    var row = board[i]
      
      if(!isRowCorrect(row)){
        return false
      }
      row.forEach((val,index) => {
        columns[index] = columns[index] || [];
        columns[index].push(val)
      });
  }
  
  for(let i=0;i<columns.length;i++){
    if(!isRowCorrect(columns[i])){
      return false
    }
  }
  
  return check3x3Elements(board)
}

function isRowCorrect(row){
  
  let howRowShouldLookLike = [1,2,3,4,5,6,7,8,9]
  let sortedRow = row.slice().sort((a,b) => a-b);
  sortedRow = sortedRow.filter((val,index) => val !== howRowShouldLookLike[index])
  return sortedRow.length == 0;
}

function check3x3Elements(board){
  
  
  var table3x3 = [];
  
  board.forEach((row,indexOfRow) => {
    
    row.forEach((val,indexOfVal) => {
      
      var finalIndex = Math.floor(indexOfRow/3)*3 + Math.floor(indexOfVal/3);
      table3x3[finalIndex] = table3x3[finalIndex] || []
      table3x3[finalIndex].push(val)
    })
    
  })
  for(let i=0;i<table3x3.length;i++){
    if(!isRowCorrect(table3x3[i])){
      return false
    }
  }
  
  return true;

}
