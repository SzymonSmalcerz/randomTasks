/*


	Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) 
	between 0 and n. Count the numbers of digits d used in the writing of all the k**2. 
	Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

	#Examples:

	n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
	We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

	nb_dig(25, 1):
	the numbers of interest are
	1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
	so there are 11 digits `1` for the squares of numbers between 0 and 25.


*/


function nbDig(n, d) {
    var count = 0;
    
    for(let i=0;i<=n;i++){
      count += getNumOfTimes(i,d);
    }
    
    return count;
}

let getNumOfTimes = (n,d) => {
  
  if(d == 0 && n == 0){return 1} //special case
  
  n = Math.pow(n,2);
  var res = 0;
  while(n > 0){
    if(n%10 == d){
      res += 1;
    }
    
    n = Math.floor(n/10);
  }
  return res;

}
