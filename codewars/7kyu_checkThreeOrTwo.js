/*

Given an array with 5 string values 'a', 'b' or 'c'. Check if the array contains three and two of the same values.

For example:

['a', 'a', 'a', 'b', 'b'] => true  // 3 x 'a' and 2 x 'b'
['a', 'b', 'c', 'b', 'c'] => false // 1 x 'a', 2 x 'b' and 2 x 'c'
['a', 'a', 'a', 'a', 'a'] => false // 5 x 'a'

*/


function checkThreeAndTwo(array) {
  var counter = 1;
  return array.sort()
       .map((val,index,arr) => {
        if(val == arr[index-1]){
          counter += 1;
          return counter;
        }else{
          counter = 1;
          return counter;
        }
        
       })
       .reduce((total,val) => val + total) == 9;
}
