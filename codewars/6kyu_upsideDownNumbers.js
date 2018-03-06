/*

	Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

	Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.

	More examples in the test cases.

	Good luck!

	If you like this Kata, please try Life without primes



*/


var reverser = [];
    reverser[0] = 0;
    reverser[1] = 1;
    reverser[6] = 9;
    reverser[8] = 8;
    reverser[9] = 6;

function solve(x, y) {
 var sum = 0;
 for(let i=x;i<=y;i++){
   sum += canRotate(i);
 }
 return sum;
};

function canRotate(n){
  
  if(n===0){return 1;}//kind of special case
  var orgValue = n;
  var sum = [];
  while(n>0){
    var num = n%10;
    n = Math.floor(n/10);
    if(/[01689]/.test(num)){
      sum.push(reverser[num]);
    } else{
      return 0;
    }
  }
  return parseInt(sum.join("")) == orgValue ? 1 : 0;
}


