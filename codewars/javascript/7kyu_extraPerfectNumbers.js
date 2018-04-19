/*


	Task:
	Given a positive integer N, return the extra 
	perfect numbers in range from 1 to N.

	A number is called Extra Perfect Number 
	if it has the same first and last bits (set bits).

	Notes:
	1) Only positive integers will be passed.

	2) The returned vector/list should contain 
	the extra perfect numbers in ascending order (from lowest to highest).
	Example #1
	extraPerfect(3)  ==>  return {1,3}
	Explanation:
	(1)10 = (1)2
	First and last bits as set bits.

	(3)10 = (11)2
	First and last bits as set bits.

	Example #2
	extraPerfect(7)  ==>  return {1,3,5,7}
	Explanation:
	(5)10 = (101)2
	First and last bits as set bits.

	(7)10 = (111)2
	First and last bits as set bits.

	[For More Enjoyable Katas] 
	(http://www.codewars.com/users/MrZizoScream/authored)
	ALL translation are welcomed
	Enjoy Learning!!! Zizou


*/


function extraPerfect(n){
  let res = [];
  for(let i=1;i<=n;i++){
    let binaryString = i.toString(2);
    if(binaryString[0] == binaryString[binaryString.length-1]){
      res.push(i);
    }
  }
  return res;
}
