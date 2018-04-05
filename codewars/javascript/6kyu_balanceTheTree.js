/*


	Implement a function to check if a binary tree is balanced.

	For the purposes of this question, a balanced tree is defined to be 
	a tree such that no two leaf nodes differ in distance from the root by more than one.

	A Node is defined by an object of type:

	  {
	    value,
	    left,
	    right
	  }
	witth left/right being either null or other Nodes.

	Trees start with a root Node. A leaf node is a node that has no children 
	and effectively ends that branch of the tree.

	Under these rules, this is valid:

	      a
	     / \
	    b   c
	   /   
	  e
	As is this:

	      a
	     / 
	    b   
	   /   
	  e
	But this is not: (depth of z is 1, but f is 3)

	      a
	     / \
	    b   z
	   /   
	  e
	 /
	f
	Definition of Node:

	function Node(value, left, right){
	  this.value = value,
	  this.left = left;
	  this.right = right;
	}


*/


function isBalanced(root){
  let arrOfDepths = [];
  check(root,0,arrOfDepths);
  arrOfDepths = arrOfDepths.sort((a,b) => b-a);
  return arrOfDepths[0] - arrOfDepths[arrOfDepths.length-1] <= 1;
}

function check(root,depth,arrOfDepths){
  if(!root.right && !root.left){
    arrOfDepths.push(depth);
    return;
  }
  
  depth += 1;
  if(root.left){
    check(root.left,depth,arrOfDepths);
  }
  
  if(root.right){
    check(root.right,depth,arrOfDepths);
  }
  
}
