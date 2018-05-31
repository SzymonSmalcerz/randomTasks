/*


	###Lyrics... Pyramids are amazing! Both in architectural and mathematical 
	sense. If you have a computer, you can mess with pyramids even if you are 
	not in Egypt at the time. For example, let's consider the following problem. 
	Imagine that you have a plane pyramid built of numbers, like this one here:

	   /3/
	  \7\ 4 
	 2 \4\ 6 
	8 5 \9\ 3
	Here comes the task...
	Let's say that the 'slide down' is a sum of consecutive numbers from the top to 
	the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

	Your task is to write a function longestSlideDown (in ruby: longest_slide_down) 
	that takes a pyramid representation as argument and returns its' longest 'slide down'. For example,

	longestSlideDown [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]] 
	-- => 23
	###By the way... My tests include some extraordinarily high pyramides so as you 
	can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

	(c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.


*/


function longestSlideDown (pyramid) {
  /* info about every cell */
  let pyramidDictionary = pyramid.map((row,indexOfRow) => {
    return row.map((cell,indexInRow) => {
      return {
        value : cell,
        indexInRow : indexInRow,
        indexOfRow : indexOfRow,
        wayUp : false,
        wayDown : false,
        chosen : false,
        longestPathUp : -1,
        longestPathDown : -1
      }
    });
  });
  
  let pyramidDictSorted = pyramidDictionary.reduce((t,v) => t.concat(v),[])
                                          .sort((a,b) => a.value - b.value);
  while(pyramidDictSorted.length > 0){
    let mostValuableCell = pyramidDictSorted.pop();
    let ior = mostValuableCell.indexOfRow;
    let iir = mostValuableCell.indexInRow;
    pyramidDictionary[ior][iir].chosen = true;
    
    //check way up 
    let isWayUp = checkIfIsWayUp(pyramidDictionary,mostValuableCell);
    //check way down
    let isWayDown = checkIfIsWayDown(pyramidDictionary,mostValuableCell);
    
//     if(isWayUp && isWayDown){
//       console.log(mostValuableCell);
//       console.log(pyramidDictionary);
//       return mostValuableCell.longestPathUp + mostValuableCell.longestPathDown - mostValuableCell.value;
//     }
    
  }
//   console.log(pyramidDictionary);
  return pyramidDictionary[0][0].longestPathDown + pyramidDictionary[0][0].longestPathUp - pyramidDictionary[0][0].value;
}

let checkIfIsWayUp = (pyramidDictionary,currCell) => {
  let ior = currCell.indexOfRow;
  let iir = currCell.indexInRow;
  if (ior == 0) {
    currCell.wayUp = true;
    currCell.longestPathUp = currCell.value;
  }
  if (iir -1 >=0) {
    let leftUpCell = pyramidDictionary[ior-1][iir-1];
    if(leftUpCell.wayUp){
      currCell.wayUp = true;
      currCell.longestPathUp = currCell.value + leftUpCell.longestPathUp;
    }
  }
  if (ior-1 >= iir) {
    let rightUpCell = pyramidDictionary[ior-1][iir];
    if(rightUpCell.wayUp){
      rightUpCell.wayUp = true;
      currCell.longestPathUp = Math.max(currCell.value + rightUpCell.longestPathUp, currCell.longestPathUp);
    }
  }
  
  if(currCell.wayUp){ // inform cells below that through currCell is way up to the top
    markWayUp(pyramidDictionary,currCell);
  }
  return currCell.wayUp;
};

let markWayUp = (pyramidDictionary,currCell) => {
  let ior = currCell.indexOfRow;
  let iir = currCell.indexInRow;
  
  if(ior == pyramidDictionary.length - 1 ){return ;} //last row, we can't go down
  
  let leftDownCell = pyramidDictionary[ior+1][iir];
  if(leftDownCell.chosen){
    if(leftDownCell.wayUp){
      if (leftDownCell.value + currCell.longestPathUp > leftDownCell.longestPathUp) {
        leftDownCell.longestPathUp = leftDownCell.value + currCell.longestPathUp;
        markWayUp(pyramidDictionary,leftDownCell);
      }
    } else {
      leftDownCell.wayUp = true;
      leftDownCell.longestPathUp = leftDownCell.value + currCell.longestPathUp;
      markWayUp(pyramidDictionary,leftDownCell);
    }
  }
  
  
  let rightDownCell = pyramidDictionary[ior+1][iir+1];
  if(rightDownCell.chosen){
    if(rightDownCell.wayUp){
      if(rightDownCell.value + currCell.longestPathUp > rightDownCell.longestPathUp) {
        rightDownCell.longestPathUp = rightDownCell.value + currCell.longestPathUp;
        markWayUp(pyramidDictionary,rightDownCell);
      }
    } else {
      rightDownCell.wayUp = true;
      rightDownCell.longestPathUp = rightDownCell.value + rightDownCell.longestPathUp;
      markWayUp(pyramidDictionary,rightDownCell);
    }
  }
  
};


/* WAY DOWN */


let checkIfIsWayDown = (pyramidDictionary,currCell) => {
  let ior = currCell.indexOfRow;
  let iir = currCell.indexInRow;
  if (ior == pyramidDictionary.length - 1) {
    currCell.wayDown = true;
    currCell.longestPathDown = currCell.value;
  }
  if (ior + 1 <= pyramidDictionary.length -1 ) {
    let leftDownCell = pyramidDictionary[ior+1][iir];
    if(leftDownCell.wayDown){
      currCell.wayDown = true;
      currCell.longestPathDown = currCell.value + leftDownCell.longestPathDown;
    }
    
    
    let rightDownCell = pyramidDictionary[ior+1][iir+1];
    if(rightDownCell.wayDown){
      currCell.wayDown = true;
      currCell.longestPathDown = Math.max(currCell.value + rightDownCell.longestPathDown, currCell.longestPathDown);
    }
    
  };
  
  if(currCell.wayDown){ // inform cells above that through currCell is way up to the top
    markWayDown(pyramidDictionary,currCell);
  }
  return currCell.wayDown;
};

let markWayDown = (pyramidDictionary,currCell) => {
  let ior = currCell.indexOfRow;
  let iir = currCell.indexInRow;
  
  if(ior == 0){return ;} //last row, we can't go up
  
  if (iir-1 >= 0) {
    let leftUpCell = pyramidDictionary[ior-1][iir-1];
    if (leftUpCell.chosen) {
      if(leftUpCell.wayDown){
        if(leftUpCell.value + currCell.longestPathDown > leftUpCell.longestPathDown){
          leftUpCell.longestPathDown = leftUpCell.value + currCell.longestPathDown;
          markWayDown(pyramidDictionary,leftUpCell);
        } else {
          //do nothing
        }
      } else {
        leftUpCell.wayDown = true;
        leftUpCell.longestPathDown = leftUpCell.value + currCell.longestPathDown;
        markWayDown(pyramidDictionary,leftUpCell);
      }
    }
  };
  
  if (ior - 1 >= iir) {
    let rightUpCell = pyramidDictionary[ior-1][iir];
    if (rightUpCell.chosen) {
      if(rightUpCell.wayDown){
        if (rightUpCell.value + currCell.longestPathDown > rightUpCell.longestPathDown) {
          rightUpCell.longestPathDown = rightUpCell.value + currCell.longestPathDown;
          markWayDown(pyramidDictionary,rightUpCell);
        } else {
          //do nothing
        }
      } else {
        rightUpCell.wayDown = true;
        rightUpCell.longestPathDown = rightUpCell.value + currCell.longestPathDown;
        markWayDown(pyramidDictionary,rightUpCell);
      }
    }
  };
  
};






