/*


	Task
	You are at position [0, 0] in maze NxN and you can only move in 
	one of the four cardinal directions (i.e. North, East, South, West). 
	Return true if you can reach position [N-1, N-1] or false otherwise.

	Empty positions are marked .. Walls are marked W. Start and exit 
	positions are empty in all test cases.


*/


function pathFinder(maze){
  maze = maze.split("\n").map(val => val.split(""));
  let N = maze.length;
  let cachedPositions = [];
  let currentPosition = {
    x:0,
    y:0
  };
  let couldMove = false;
  while(true){
    if(currentPosition.x == N-1 && currentPosition.y == N-1){
      return true;
    }

    if(currentPosition.y < N){
      if(maze[currentPosition.x] && maze[currentPosition.x][currentPosition.y+1] == "."){
        cacheLeftPosition();
        cacheDownPosition();
        cacheUpPosition();
        maze[currentPosition.x][currentPosition.y+1] = "VISITED";
        currentPosition.y +=1 ;
        continue;
      }
    }
    
    if(currentPosition.y > 0){
      if(maze[currentPosition.x] && maze[currentPosition.x][currentPosition.y-1] == "."){
        cacheRightPosition();
        cacheDownPosition();
        cacheUpPosition();
        maze[currentPosition.x][currentPosition.y-1] = "VISITED";
        currentPosition.y -=1 ;
        continue;
      }
    }
    
    if(currentPosition.x > 0){
      if(maze[currentPosition.x-1] && maze[currentPosition.x-1][currentPosition.y] == "."){
        cacheRightPosition();
        cacheLeftPosition();
        cacheDownPosition();
        maze[currentPosition.x-1][currentPosition.y] = "VISITED";
        currentPosition.x -=1 ;
        continue;
      }
    }
    
    if(currentPosition.x < N){
      if(maze[currentPosition.x+1] && maze[currentPosition.x+1][currentPosition.y] == "."){
        cacheRightPosition();
        cacheLeftPosition();
        cacheUpPosition();
        maze[currentPosition.x+1][currentPosition.y] = "VISITED";
        currentPosition.x +=1 ;
        continue;
      }
    }
    
    let newCurrentPosition = cachedPositions.pop();
    if(!newCurrentPosition){
      return false;
    }else{
      currentPosition = newCurrentPosition;
    }
    
  }
  
  function cacheUpPosition(){
    if(maze[currentPosition.x-1] && maze[currentPosition.x-1][currentPosition.y] == "."){
      cachedPositions.push({
        x : currentPosition.x-1,
        y : currentPosition.y
      });
    }
  }
  
  function cacheDownPosition(){
    if(maze[currentPosition.x+1] && maze[currentPosition.x+1][currentPosition.y] == "."){
          cachedPositions.push({
            x : currentPosition.x+1,
            y : currentPosition.y
          });
    }
  }
  
  function cacheRightPosition(){
    if(maze[currentPosition.x] && maze[currentPosition.x][currentPosition.y+1] == "."){
          cachedPositions.push({
            x : currentPosition.x,
            y : currentPosition.y+1
          });
    }
  }
  function cacheLeftPosition(){
    if(maze[currentPosition.x] && maze[currentPosition.x][currentPosition.y-1] == "."){
          cachedPositions.push({
            x : currentPosition.x,
            y : currentPosition.y-1
          });
    }
  }
  
}
