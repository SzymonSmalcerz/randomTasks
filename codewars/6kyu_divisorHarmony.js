/*


	The sum of divisors of 6 is 12 and the sum of divisors of 28 is 56. You will notice that 12/6 = 2 and 56/28 = 2. We shall say that (6,28) is a pair with a ratio of 2. Similarly, (30,140) is also a pair but with a ratio of 2.4. These ratios are simply decimal representations of fractions.

	(6,28) and (30,140) are the only pairs in which every member of a pair is 0 <= n < 200. The sum of the lowest members of each pair is 6 + 30 = 36.

	You will be given a range(a,b), and your task is to group the numbers into pairs with the same ratios. You will return the sum of the lowest member of each pair in the range.

	solve(0,200) = 36
	Good luck!


*/

function solve(a,b){
 var obj = {};
 var sum = 0;
 
 for(let i=a;i<b;i++){
   if(!obj[getID(i)]){
     obj[getID(i)] = {};
     obj[getID(i)].val = i;
   }else {
     obj[getID(i)].minTwoTimes = true;
   }
 }
 
 for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
        if(obj[property].minTwoTimes){
          sum+=obj[property].val;
        }
    }
  }
 
 return sum;
};

function getID(number){ // id of obj == sum of num divisors
  
  var sumOfDivisors = 0;
  
  for(let i=1;i<Math.sqrt(number);i++){
    if(number%i==0){
      sumOfDivisors+=i;
      sumOfDivisors += (number/i);
    }
  }
  if(Number.isInteger(Math.sqrt(number))){sumOfDivisors += Math.sqrt(number)}
  return (sumOfDivisors/number).toString();
  
}
