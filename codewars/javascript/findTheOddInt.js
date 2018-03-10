/*


Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


*/




function findOdd(A) {

  A.sort();
  
  var obj = {
    currVal : A[0],
    currNumOfApperance : 1
  }
  
  for(var i=1;i<A.length;i++){
    if(A[i] == obj.currVal){
      obj.currNumOfApperance +=1;
    }else{
      if(obj.currNumOfApperance%2 != 0){
        return obj.currVal;
      }else{
        obj.currVal = A[i];
        obj.currNumOfApperance = 1;
      }
    }
  }
  
  
  return obj.currVal;
  
}
