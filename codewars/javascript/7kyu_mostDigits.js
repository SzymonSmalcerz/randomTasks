/*


	Find the number with the most digits.

	If two numbers in the argument array have the same 
	number of digits, return the first one in the array.


*/


function findLongest(array){
  return parseInt(array.map((val,index) => { return {val : val.toString(),index} }).sort((a,b) => b.val.length - a.val.length != 0 ? b.val.length - a.val.length : a.index - b.index)[0].val);
}
