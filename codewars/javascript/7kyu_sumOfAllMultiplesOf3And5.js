/*


	Your task is to write function findSum.

	Upto and including n, this function will return 

	the sum of all multiples of 3 and 5.

	For example:

	findSum(5) should return 8 (3 + 5)

	findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)


*/


function findSum(n) {
  let res = 0;
  for(let i=3;i<=n;i+=3){
    if(i%5 != 0){res += i;}
  }
  for(let i=5;i<=n;i+=5){
    res+=i;
  }
  
  return res;
  
}
//eventually : 
function findSum(number){
  let res = 0;
  for(let i=3;i<number;i++){
    if(i%3 == 0 || i%5==0)res+=i;
  }
  return res;
}

