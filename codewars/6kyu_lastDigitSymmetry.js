/*


	Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:

	the first two digits of 1176 form a prime.
	the first two digits of the square 1382976 also form a prime.
	the last two digits of 1176 and 1382976 are the same.
	Given two numbers representing a range (a, b), how many numbers satisfy this property within that range? (a <= n < b)

	Example
	solve(2, 1200) = 1, because only 1176 satisfies this property within the range 2 <= n < 1200. See test cases for more examples.
	The upper bound for the range will not exceed 1,000,000.

	Good luck!


*/


function solve(a, b) {
  var n = 0;
  for(let i=a;i<=b;i++){
    var num = Math.pow(i,2);
    var numLast = num%100;
    var iLast = i%100;
    if(!(iLast == numLast))continue;
    var iFirstTwo = parseInt(i.toString().slice(0,2));
    if(!isPrime(iFirstTwo))continue;
    var numFirstTwo = parseInt(num.toString().slice(0,2));
    if(!isPrime(numFirstTwo))continue;
    n+=1;
  }
  
  return n;
}

function isPrime(n){
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i === 0) return false;
  }
  return true;
}
