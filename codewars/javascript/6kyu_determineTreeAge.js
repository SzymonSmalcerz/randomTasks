/*


	Task
	Your task is to write a function which takes a tree trunk (array of arrays) 
	as an input and returns tree age.
	Each array in the tree trunk is a tree ring,
	each ring is an equivalent of one year.

	Sometimes knots can grow inside a tree ring, it should be ignored.
	Knot is an empty array that does not occure in the first two rings.There can be multiple knots in each ring, in random position.

	  // trunks without knots
	  var oneYearOld = []

	  var twoYearsOld = [[]]

	  var threeYearsOld = [[[]]]

	  // with knots

	  var threeYearsOld = [[[]], []]

	  var fourYearsOld = [[[[]],[],[]]]


*/


const treeAge = treeTrunk => {
  var yearsOld = 1;
  
  while(treeTrunk[0] != null){
    
    yearsOld += 1;
    treeTrunk = treeTrunk.filter(tree => {
      return tree[0] !== undefined
    });
    treeTrunk = treeTrunk[0] || []
  }
  
  return yearsOld;
}
