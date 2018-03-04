/*


You are given N k-digit integers. You have to rearrange the digits in the integers so that the difference between the largest and the smallest number was minimum. Digits should be rearranged by the same rule in all integers.

Input:
 Input contains array with N k-digit positive integers (written as strings). Leading zeroes are allowed both in the initial integers and the integers resulting from the rearranging of digits.

Output:
 Return a single number: the minimally possible difference between the largest and the smallest number after the digits are rearranged in all integers by the same rule.

Examples:

['5237', 
 '2753', 
 '7523', 
 '5723',     =>  2700 
 '5327', 
 '2537']

['010',
 '909',      =>  3
 '012]

['00',
 '57',       =>  75
 '76']
Note:
 In the first sample, if we rearrange the digits in numbers as (3,1,4,2), then the 2-nd and the 4-th numbers will equal 5237 and 2537 correspondingly (they will be maximum and minimum for such order of digits).
 In the second sample, if we swap the second digits and the first ones, we get integers 100, 99 and 102.


*/


function permutations(s) { 
  
  s.sort();
  var minDiffrence = Math.abs(parseInt(s[0]) - parseInt(s[s.length-1]));
  var lastIndex = s.length-1;
  var numOfDigits = s[lastIndex].length;
  var posibilities = [];
  s.forEach(val => {posibilities.push(permut(val))});
  for(let i=0;i<posibilities[lastIndex].length;i++){
    var tempArr = [];
    for(let j=0;j<=lastIndex;j++){
      tempArr.push(posibilities[j][i] ? parseInt(posibilities[j][i]) : 0);
    }
    tempArr.sort((a,b) => a-b);
    if( minDiffrence > (tempArr[lastIndex] - tempArr[0])) {
      minDiffrence = tempArr[lastIndex] - tempArr[0];
    };
  }
  
  return minDiffrence;
}


function permut(string) {
    if (string.length < 2) return string;
    var permutations = []; 
    
    for (var i=0; i<string.length; i++) {
    
        var char = string[i];    
        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); 
        
        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)
            
    }
    
    return permutations;
}
