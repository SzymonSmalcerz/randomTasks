/*


	In the Deca Forest, grow the Deca Trees.

	On each Deca Tree, a trunk has 10 branches.

	On each branch, there are 10 twigs.

	On each twig, there are 10 leaves.

	Unfortunately, the Deca Forest is becoming wildly overgrown and is 
	endangering the local wildlife. You must add methods to the tree 
	object so that the woodcutter can remove parts of a tree as follows, 
	where n is a positive integer:

	chopTrunk(n) will remove n trunks
	chopBranch(n) will remove n branches
	chopTwig(n) will remove n twigs
	chopLeaf(n) will remove n leaves

	Make sure that when you remove any part of the tree, you also remove 
	all the smaller parts attached to it. e.g. if you remove a twig you 
	must also remove 10 leaves from the tree object. The woodcutter's 
	aim is to trim back this forest, so he will try to remove as much 
	of the tree as possible each time he chops.

	Conversely, when you remove a smaller part, you do not need to remove 
	the larger parts it is attached to - for example you could pick off 
	all the leaves from a tree and the number of twigs, branches and 
	trunks would be unaffected.

	The tree cannot have a negative number of trunks, branches, leaves 
	or twigs. That would be highly unnatural.

	You must also add a method 'describe' that allows the Deca Forest 
	tourguides to describe each tree. It should describe the tree 
	in the following format:

	"This tree has a trunks, b branches, c twigs and d leaves."

	(where a, b, c and d are integer values)

	Your methods will be tested for trees with varying numbers of 
	trunks and for removing random numbers of leaves, twigs, 
	branches and trunks. The test will use only positive integers 
	for these values.


*/


class tree {
  constructor(trunks){
    this.trunks = trunks;
    this.branches = trunks * 10;
    this.twigs = trunks * 100;
    this.leaves = trunks * 1000;
  }
  
  chopTrunk(n){ //will remove n trunks
    this.trunks -= n;
    this.chopBranch(10*n);
  }
  
  chopBranch(n){// will remove n branches
    this.branches -= n;
    this.chopTwig(n*10);
  }
  
  chopTwig(n){// will remove n twigs
    this.twigs -= n;
    this.chopLeaf(n*10);
  }
  
  chopLeaf(n){// will remove n leaves
    this.leaves -= n;
    this.handleNegativeNumberOfParts();
  }
  
  handleNegativeNumberOfParts(){
    this.leaves   = this.leaves >= 0 ? this.leaves : 0;
    this.twigs    = this.twigs >= 0 ? this.twigs : 0;
    this.branches = this.branches >= 0 ? this.branches : 0;
    this.trunks   = this.trunks >= 0 ? this.trunks : 0;
  }
  
  describe(){
    return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
  }
}

