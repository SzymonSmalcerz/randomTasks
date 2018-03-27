/*


	You are given a node that is the beginning of a linked list. 
	This list always contains a tail and a loop.

	Your objective is to determine the length of the loop.

	For example in the following picture the tail's size is 3 and the loop size is 11.

	Image and video hosting by TinyPic
	// Use the `getNext' method or 'next' property to get the following node.

	node.getNext()
	node.next
	Thanks to shadchnev, I broke all of the methods from the Hash class.

	Don't miss dmitry's article in the discussion after you pass the Kata !!


*/

var  loop_size = (node) => {
  let sizeOfLoop = 0;
  let visited = [];
  let looped = [];
  while(true){
    if(visited.indexOf(node) === -1){
      visited.push(node);
    }else if(looped.indexOf(node) === -1){
      sizeOfLoop += 1;
      looped.push(node)
    } else {
      break;
    }
    node = node.next;
  }
  return sizeOfLoop;
}
