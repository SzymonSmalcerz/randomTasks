/*


	Given an n x n array, return the array elements arranged from outermost 
	elements to the middle element, traveling clockwise.

	array = [[1,2,3],
		 [4,5,6],
		 [7,8,9]]
	snail(array) #=> [1,2,3,6,9,8,7,4,5]
	For better understanding, please follow the numbers of the next array consecutively:

	array = [[1,2,3],
		 [8,9,4],
		 [7,6,5]]
	snail(array) #=> [1,2,3,4,5,6,7,8,9]
	This image will illustrate things more clearly:

	https://www.haan.lu/files/2513/8347/2456/snail.png


	NOTE: The idea is not sort the elements from the lowest value to the highest; 
	the idea is to traverse the 2-d array in a clockwise snailshell pattern.

	NOTE 2: The 0x0 (empty matrix) is represented as [[]]


*/


snail = function(array) {
  
  
  
  var nextDirection = {
    "left"  : "up",
    "up"    : "right",
    "right" : "down",
    "down"  : "left"
  }
  var direction = "right"; //start from point [0][0]
  var rowNum = 0;
  var columnNum = 0;
  var endRow = Math.floor(array.length/2);
  var endColumn = array.length%2 == 0 ? array.length/2 - 1 : Math.floor(array.length/2);
  var rightBorder = array.length-1;
  var leftBorder = 0;
  var bottomBorder = array.length-1;
  var topBorder = 1;
  
  var resultArray = [];
  function changeDirection(){
    if(direction == "right"){
      if(columnNum == rightBorder){
          direction = nextDirection[direction];
          rightBorder -=1;
          changeDirection();
          return;
      }
        columnNum += 1;
    } else if(direction == "left"){
      if(columnNum == leftBorder){
        direction = nextDirection[direction];
        leftBorder +=1;
        changeDirection();
        return;
      }
      columnNum -= 1;
      
      
    } else if(direction == "up"){
      if(rowNum == topBorder){
        direction = nextDirection[direction];
        topBorder +=1;
        changeDirection();
        return;
      }
      rowNum -= 1;
      
      
    } else if(direction == "down"){
      if(rowNum == bottomBorder){
        direction = nextDirection[direction];
        bottomBorder -=1;
        changeDirection();
        return;
      }
      rowNum += 1;
    }
  }
  while(!(rowNum == endRow && columnNum == endColumn)){
    resultArray.push(array[rowNum][columnNum]);
    changeDirection();
    
  }
  if(array[endRow][endColumn]){
    resultArray.push(array[endRow][endColumn]);
  }
  return resultArray;
  
}
