/*


	Task
	Given an array of intgers , find the minimum sum which 
	is obtained from summing each Two integers product .

	Notes
	Array/list will contain positives only .
	Array/list will always has even size
	Input >> Output Examples
	1- minSum({5,4,2,3}) ==> return (22)
	Explanation:
	5*2 +3*4 = 22
	minSum({12,6,10,26,3,24}) ==> return (342)
	Explanation:
	26*3 + 24*6 + 12*10 = 342
	minSum({9,2,8,7,5,4,0,6}) ==> return (74)
	Explanation:
	9*0 + 8*2 +7*4 +6*5 = 74
	minSum({5,4,2,3}) // return 22 

	Explanation :: 
	5*2 +3*4 = 22

	minSum({12,6,10,26,3,24}) // return 342

	Explanation ::
	26*3 + 24*6 + 12*10 = 342

	minSum({9,2,8,7,5,4,0,6}) // return 74

	Explanation ::
	9*0 + 8*2 +7*4 +6*5 = 74


*/


function minSum(arr) { // arr has always even number of elements 
  arr.sort((a,b) => b-a);
  let l = arr.length - 1; // last index
  return arr.reduce((t,v,i,a) => {return t + v*a[l-i]},0)/2;
}
