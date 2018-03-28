/*


	In your class, you have started lessons about arithmetic progression. 
	Since you are also a programmer, you have decided to write a function 
	that will return the first n elements of the sequence with the given 
	common difference r and first element a.

	The result should be a string of numbers, separated by comma and space.

	Example
	arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
	# first element: 1, difference: 2, how many: 5


*/


function arithmeticSequenceElements(a,r,n) {
  let arr = [];
  while(n>0){
    arr.push(a);
    a+=r;
    n-=1;
  }
  return arr.join(", ");
}
