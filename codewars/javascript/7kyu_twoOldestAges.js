/*


	The two oldest ages function/method needs to be completed. 
	It should take an array of numbers as its argument and 
	return the two highest numbers within the array. The 
	returned value should be an array in the format [second oldest age, oldest age].

	The order of the numbers passed in could be any order. 
	The following are some examples of what the method 
	should return (shown in different languages but the 
	logic will be the same between all three).

	twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
	```nim twoOldestAges(@[1, 5, 87, 45, 8, 8]) # should return [45, 87]


*/


// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  ages.sort((a,b) => b-a)
  ages = ages.slice(0,2)
  ages.sort((a,b) => a-b);
  return ages;
}

