/*


	Task
	For a given array of integers, construct a square matrix A with side length equal 
	to the length of array, where A[i, j] is equal to the sum of all elements of the array with indexes between i and j, inclusive.

	Note that between i and j means a[i] + a[i + 1] + ... + a[j] for the case i ≤ j, and a[j] + a[j + 1] + ... + a[i] for the case i > j.

	Input/Output
	[input] integer array arr

	2 ≤ arr.length ≤ 10, 1 ≤ arr[i] ≤ 10.

	[output] 2D integer array

	Example
	For arrr = [1, 2, 3], the output should be

	[
	[1, 3, 6],
	[3, 2, 5],
	[6, 5, 3]
	]



*/

function segmentSumsMatrix(inputArray) {
  var n = inputArray.length;
  var resArr = [];
  for(let row=0;row<n;row++){
    resArr.push([])
    for(let column=0;column<n;column++){
      resArr[row][column] = getSum(row,column,inputArray)
    }
  }
  return resArr;
}

var getSum = (a,b,arr) => {
  var min = Math.min(a,b);
  var max = Math.max(a,b);
  var sum = 0;
  for(let i=min;i<=max;i++){
    sum+=arr[i]
  }
  return sum
}
