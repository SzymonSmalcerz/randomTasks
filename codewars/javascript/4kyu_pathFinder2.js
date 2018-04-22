/*


	Task
	You are at position [0, 0] in maze NxN and you can only move 
	in one of the four cardinal directions (i.e. North, East, South, West). 
	Return the minimal number of steps to exit position [N-1, N-1] if 
	it is possible to reach the exit from the starting position. 
	Otherwise, return false in JavaScript and -1 in C++.

	Empty positions are marked .. Walls are marked W. Start 
	and exit positions are guaranteed to be empty in all test cases.


*/



function pathFinder(maze){
  maze = maze.split("\n").map((val,index_1) => val.split("").map((v,index_2) => {
    if(v == "."){
      return {
        value : 9999999999, //some big value
        y : index_2,
        x : index_1,
        casched : false
      }
    } else{
      return {
        value : "WALL",
        visited : true
      }
    }
  }));
  let N = maze.length; 
  
  let cachedPositions = [];
  let currentPosition = maze[0][0];
  maze[0][0].value = 0;
  let couldMove = false;
  while(true){
    if(currentPosition.x == N-1 && currentPosition.y == N-1){
      return parseInt(maze[N-1][N-1].value);
    }
    
    cacheDownPosition();
    cacheRightPosition();
    cacheLeftPosition();
    cacheUpPosition();
        
//     let newCurrentPosition = cachedPositions.sort((a,b) => {
//         return Math.sqrt((N*N - a.x*a.x) + (N*N - a.y*a.y)) - Math.sqrt((N*N - b.x*b.x) + (N*N - b.y*b.y)) > 0;
//     }).shift();
    let newCurrentPosition = cachedPositions.shift();
    
    if(!newCurrentPosition){
      return false;
    }else{
      newCurrentPosition.casched = false;
      currentPosition = newCurrentPosition;
    }
    
  }
  
  function cacheUpPosition(){
    if(maze[currentPosition.x-1] && maze[currentPosition.x-1][currentPosition.y].value > currentPosition.value){
      maze[currentPosition.x-1][currentPosition.y].value = maze[currentPosition.x][currentPosition.y].value + 1;
 
      if(!maze[currentPosition.x-1][currentPosition.y].casched){
          cachedPositions.push(maze[currentPosition.x-1][currentPosition.y]);
          maze[currentPosition.x-1][currentPosition.y].casched = true;
      }
    }
  }
  
  function cacheDownPosition(){
    if(maze[currentPosition.x+1] && maze[currentPosition.x+1][currentPosition.y].value > currentPosition.value){
      maze[currentPosition.x+1][currentPosition.y].value = maze[currentPosition.x][currentPosition.y].value + 1;
      
      if(!maze[currentPosition.x+1][currentPosition.y].casched){
          cachedPositions.push(maze[currentPosition.x+1][currentPosition.y]);
          maze[currentPosition.x+1][currentPosition.y].casched = true;
      }
    }
  }
  
  function cacheRightPosition(){
    if(maze[currentPosition.x] && maze[currentPosition.x][currentPosition.y+1] && maze[currentPosition.x][currentPosition.y+1].value > currentPosition.value){
      maze[currentPosition.x][currentPosition.y+1].value = maze[currentPosition.x][currentPosition.y].value + 1;
          
      if(!maze[currentPosition.x][currentPosition.y+1].casched){
          cachedPositions.push(maze[currentPosition.x][currentPosition.y+1]);
          maze[currentPosition.x][currentPosition.y+1].casched = true;
      }
    }
  }
  function cacheLeftPosition(){
    if(maze[currentPosition.x] && maze[currentPosition.x][currentPosition.y-1] && maze[currentPosition.x][currentPosition.y-1].value > currentPosition.value){
      maze[currentPosition.x][currentPosition.y-1].value = maze[currentPosition.x][currentPosition.y].value + 1;

      if(!maze[currentPosition.x][currentPosition.y-1].casched){
          cachedPositions.push(maze[currentPosition.x][currentPosition.y-1]);
          maze[currentPosition.x][currentPosition.y-1].casched = true;
      }
    }
  }
  
}
