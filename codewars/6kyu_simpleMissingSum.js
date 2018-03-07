/*

	In this Kata, we will calculate the minumum number that is not possible sum from a list of integers.

	solve([1,2,8,7]) = 4, because we can get 1, 2, 1+2=3. But 4 is the minimum number not possible from the list. 
	solve([4,2,12,3,1]) = 11. We have 1, 2, 3, 4, 4+1=5, 4+2=6, 4+3=7,4+3+1=8,4+3+2=9,4+3+2+1=10. But no 11. 
	solve([4,2,12,3]) = 1
	More examples in test cases.

	Good luck!

*/

//LINEAR SOLUTION (!)

function solve(arr) {
  arr.sort((a,b) => a-b);
  return arr[0] !== 1 ? 1 : getRes(arr) || arr.reduce((t,v) => t+v)+1;
}

function getRes(arr,sum){
  var sum = sum || 0;
  for(let i=0;i<arr.length-1;i++){
    sum+=arr[i];
    if(arr[i]+1 != arr[i+1]){
    
      if(arr[i+1]-1 > sum){
        console.log(sum+1);
        return sum+1;
      }else{
        return getRes(arr.slice(i+1),sum); //if arr[i+1]-1 < sum then arr[i+1] as well as arr[i+1]-1 must be achievable to get from elements in arr :)
                                           //and we want to search in greater elements
      }
    }
  }
  return null;
}

