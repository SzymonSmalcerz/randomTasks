/*


	In this Kata, you will be given a number and your task will be to return the nearest prime number.

	solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
	solve(125) = 127
	We'll be testing for numbers up to 10^10. 500 tests.

	More examples in test cases.

	Good luck!


*/


function solve(n){
    var lowerNum = n-1;
    var higherNum = n+1;
    if(isPrime(n)) return n;
    while(true){
      if(isPrime(lowerNum)){return lowerNum;}
      if(isPrime(higherNum)){return higherNum;}
      lowerNum-=1;
      higherNum+=1;
    }
}

function isPrime(num){
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i == 0){return false}
  }
  return true;
}
