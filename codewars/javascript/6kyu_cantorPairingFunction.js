/*


	Georg Cantor's in one of his proofs used following sequence:

	1/1 1/2 1/3 1/4 1/5 ... 
	2/1 2/2 2/3 2/4 ...
	3/1 3/2 3/3 ... 
	4/1 4/2 ... 
	5/1 ... 
	There are many ways to order those expressions. In this kata we'll use this approach:

	Cantor pairing function image
	So sequence is:

	1/1, 1/2, 2/1, 3/1, 2/2, 1/3, 1/4 ...
	Your task is to return nth element of this sequence.

	Input: n - positive integer (max 268435455)

	Output: string - nth expression of sequence - 'a/b' where a and b are integers.


*/


function cantor(n){
  
  var howManyRowsBeforeN = Math.floor((-1 + Math.sqrt(1 + 8*n))/2);
  if(Number.isInteger(Math.sqrt(1 + 8*n))){howManyRowsBeforeN-=1;}
  var howManyNumsBeforeRow = ((howManyRowsBeforeN+1)/2*howManyRowsBeforeN);
  var firstNumeratorOfRow = howManyRowsBeforeN+1; //first value of row is equal to 1/(howManyRowsBeforeN+1)
  var numerator = 1;
  var denominator = 1;
  
  if((firstNumeratorOfRow)%2 == 0){// go "downstream"
    denominator = firstNumeratorOfRow - (n-howManyNumsBeforeRow) + 1;
    numerator = (1 + firstNumeratorOfRow) - denominator;
  } else{//go "upstream"
    numerator = firstNumeratorOfRow - (n-howManyNumsBeforeRow) + 1;
    denominator = (1 + firstNumeratorOfRow) - numerator;
  }
  
  return numerator + "/" + denominator;
}

// old solution, toooooo slow, could finish task in less than 12 seconds, now with new finishing in less than 200 ms
// improvement from O(n)complexity to O(1) complexity !!!!
/*
function cantor(n){
	var a = 1;
	  var res = 0;
	  while(res<n){
	    res += a;
	    a+=1;
	  }
	  
	  
	  var counter = 1;
	  var up = 1;
	  var down = 1;
	  var upDownDirection = true;
	  while(counter<n){
	    if(up == 1 || down == 1){
	      if(upDownDirection){down+=1;}
	      else{up+=1;}
	      upDownDirection = !upDownDirection;
	      counter+=1;
	      if(counter == n){break;}
	    }
	    
	      if(upDownDirection){
		up-=1;
		down+=1;
	      } else{
		up+=1;
		down-=1;
	      }
	      counter += 1;
	  }
	  return up+"/"+down;
}
*/
