/*


Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

board == solved sudoku, program must confirm if sudoku is solved correct or not.


*/

function doneOrNot(board){
  
  //first we check if rows are correct
  if(!checkRows(board)){return "Try again!";}
  
  //next check if colums are correct
  if(!checkColumns(board)){return "Try again!";}
  
  //lastly check if reqgions are correct
  if(!checkRegions(board)){return "Try again!";}
  
  return "Finished!";
  
}

function checkRows(board){
  var result = true;
 
  board.forEach( row => {
    var str = row.join("");
    row.forEach( value => {
      if(!(str.indexOf(value) == str.lastIndexOf(value))){
        result = false;
      }
    });
  });
  
  return result;
}

function checkColumns(board){
  var tempArray = [];
 
  board.forEach( (row) => {
    row.forEach( (value,index) => {
      tempArray[index] = tempArray[index] || [];
      tempArray[index].push(value);
    });
  });
  
  return checkRows(tempArray);
}

function checkRegions(board){
  var tempArray = [];
  
  var rowCounter = 0;
  var rowIncrementer = 0;
 
  board.forEach( (row,rowIndex) => {
    rowIncrementer = Math.floor(rowCounter) * 3;
    row.forEach( (value,columnIndex) => {
      tempArray[Math.floor(columnIndex/3) + rowIncrementer] = tempArray[Math.floor(columnIndex/3) + rowIncrementer] || [];
      tempArray[Math.floor(columnIndex/3) + rowIncrementer].push(value);
    });
    
    rowCounter += 0.33349;
  });
  return checkRows(tempArray);
}
