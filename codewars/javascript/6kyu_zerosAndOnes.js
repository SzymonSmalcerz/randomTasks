/*


	Given an array containing only zeros and ones, find the index of the zero that, 
	if converted to one, will make the longest sequence of ones.

	For instance, given the array:

	[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]
	replacing the zero at index 10 (counting from 0) forms a sequence of 9 ones:

	[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
		          '------------^------------'
	Your task is to complete the function that determines where to replace a zero 
	with a one to make the maximum length subsequence.

	Notes:

	If there are multiple results, return the last one:

	[1, 1, 0, 1, 1, 0, 1, 1] ==> 5

	The array will always contain only zeros and ones.


*/


function replaceZero(arr){
  arr = arr.join("").split("0");
  let tempArr = [];
  let lengthUpToI = 0;
  for(let i=0;i<arr.length-1;i++){
    lengthUpToI += arr[i].length;
    tempArr.push({
      length : arr[i].length + arr[i+1].length + 1,
      indexOfZero : lengthUpToI
    });
    lengthUpToI += 1;
  }
  return tempArr.sort((a,b) => b.length != a.length ? b.length - a.length : b.indexOfZero - a.indexOfZero)[0].indexOfZero;
}
