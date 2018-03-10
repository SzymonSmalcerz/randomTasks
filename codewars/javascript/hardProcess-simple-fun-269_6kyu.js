/*


Task
You are given an array a. Each element of a is either 0 or 1.

Let's denote the length of the longest subsequence of consecutive elements in a consisting of only numbers one as f(a). You can change no more than k zeroes into ones to maximize f(a).

Given array a, return the maximal value of f(a) after no more than k changes of zeroes to ones.

Input/Output
[input] integer array a

Aarray consisting only of 1s and 0s.

1 ≤ a.length ≤ 100.

[input] integer k

A non-negative integer

0 ≤ k ≤ a.length

[output] an integer

The maximum possible f(a).

Example
For a = [1,0,0,1,1,0,1] and k = 1, the output should be 4.

The best solution is to change the 6th (1-based) 0 into 1 to obtain [1, 0, 0, 1, 1, 1, 1]. The longest subsequence is [1, 1, 1, 1](the original subsequence is [1, 1, 0, 1])

For a = [1, 0, 0, 1, 0, 1, 0, 1, 0, 1] and k = 2, the output should be 5.

The one of best solution is to change the 5th and 7th(1-based) 0 into 1 to obtain [1, 0, 0, 1, 1, 1, 1, 1, 0, 1]. The longest subsequence is [1, 1, 1, 1, 1](the original subsequence is [1, 0, 1, 0, 1])


*/




function hardProcess(a, k) {
  var helper = 0;
  console.log(a + " k: " + k);
  a = a.map((element,index,array) => {
  
    if(element === 1){
      helper = 0;
      return "1";
    }else if(array[index+1] !== 0){ 
      var temp = helper+1;
      helper = 0;
      return "az" + temp + "a";
    }else{
      helper += 1;
      return "";
    }
  
  })
  .filter((val) => val ? true : false)
  .map((element,index,array) => {
  
    if(element !== "1"){ 
      helper = 0;
      return element;
    }else if(array[index+1] !== "1"){ 
      var temp = helper+1;
      helper = 0;
      return "ao" + temp + "a";
    }else{
      helper += 1;
      return "";
    }
  
  })
  .join("")
  .split("a")
  .filter((val) => val ? true : false)
  
  return getMax(a,k);
}

function getMax(arr,k){
  
  var max = 0;
  //from left to right
  for(var i=0;i<arr.length;i++){
    if(arr[i].split("")[0] === "z" && i !== 0){continue;}
    var tempK = k;
    var numOfZeros = 0;
    var tempMax = 0;
    for(var j=i;j<arr.length;j++){
      if(arr[j].split("")[0] === "z"){
        numOfZeros = parseInt(arr[j].slice(1));
        
        tempMax += Math.min(numOfZeros,tempK);
        tempK -= numOfZeros;
        if(tempK < 0){
          tempK = k;
          break;
        }
      } else{
        tempMax += parseInt(arr[j].slice(1));
      }
    }
     if(tempMax > max){ max = tempMax }
  }
  
  //from right to left
  for(var i=arr.length-1;i>=0;i--){
    if(arr[i].split("")[0] === "z" && i !== (arr.length-1)){continue;}
    var tempK = k;
    var numOfZeros = 0;
    var tempMax = 0;
    for(var j=i;j>=0;j--){
      if(arr[j].split("")[0] === "z"){
        numOfZeros = parseInt(arr[j].slice(1));
        
        tempMax += Math.min(numOfZeros,tempK);
        tempK -= numOfZeros;
        if(tempK < 0){
          tempK = k;
          break;
        }
      } else{
        tempMax += parseInt(arr[j].slice(1));
      }
    }
     if(tempMax > max){ max = tempMax }
  }
  
  return max;
}
