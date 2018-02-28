/*


You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1


*/


function nextBigger(n){
  var temp = n.toString().split("").reverse();
  var index = -1;
  var value;
  for(var i=0;i<temp.length-1;i++){
    if(parseInt(temp[i]) > parseInt(temp[i+1])){
    
    var minValueIndex = i;
    value = temp[i];
    for(var j=0;j<=i;j++){
      if(temp[j] < value && temp[j] > temp[i+1]){
        value = temp[j];
        minValueIndex = j;
      }
    }
    
    temp[minValueIndex] = temp[i+1];
    
    
    index = i;
    break;
    }
  }
  
  if(index < 0){return -1;}
  
  temp = value + temp.slice(0,index+1).sort().join("");
  n = n.toString().split("");
  n = n.slice(0,n.length - index - 2).join("");
  n += temp;
  
  
  return parseInt(n);
  
}
