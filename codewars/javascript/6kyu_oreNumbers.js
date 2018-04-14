/*


	Ore Numbers (also called Harmonic Divisor Numbers) are numbers for which 
	the harmonic mean of all their divisors (including the number itself) equals an integer.

	For example, 6 is an Ore Number because its harmonic mean is exactly 2:

	H(6) = 4 / (1/1 + 1/2 + 1/3 + 1/6) = 2
	Your task is to complete the function returns true if the given number is an Ore Number and false otherwise.

	You can assume all inputs will be valid positive integers.

	Hint: The harmonic mean is the total number of divisors divided by the sum of their reciprocals.


*/


function isOre(n){
  let divisors = getDivisors(n);
  let harmonicMean = getHarmonicMean(divisors);
  return parseFloat(harmonicMean).toFixed(13)%1 === 0; // javascript precision is not good enough :C thats why we have to round up to 13 decimals
}

let getDivisors = (n) => {
  let divisorsArray = [1,n];
  let element = Math.sqrt(n)
  for(let i=2;i<element;i++){
    if(n%i == 0){
      divisorsArray.push(i);
      divisorsArray.push(n/i);
    }
  }
  if(element%1 === 0 ){
    divisorsArray.push(element);
  }
  return divisorsArray;
}

let getHarmonicMean = (arr) => {
  return arr.length / arr.reduce((total,val) => total + 1/val,0);
}
