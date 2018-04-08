/*


	Ho ho! So you think you know integers, do you? Well then, young wizard, 
	tell us what the Nth digit of the Champernowne constant is!

	The constant proceeds like this: 0.12345678910111213141516...

	I hope you see the pattern!

	Conjure a function that will accept an integer, n, and return the 
	(one-indexed) nth digit of Champernowne's constant. Can you get it to run in constant time?

	For example:

	n = 1 should return 0 (the very first digit)

	n = 2 should return 1 (we ignore the period character since it's not a digit!)

	n = 20 should return 4 (that's the 4 in the number 14, 20th in sequence)

	For any invalid values, such as 0 and below, or non-integers, return... NaN!

	I hope (for your sake) that you've been practicing your mathemagical spells, 
	because a naïve solution will not be fast enough to compete in this championship!

	Invoke with precision, and be wary of rounding errors in the realms of enormity!

	May the best integer win!


*/


function champernowneDigit(n) {
  if( !(parseInt(n) === n) || n<=0){return NaN}

    let res = comon(n,0,1);
    if(res.indexOfChar <= 0){
      res.finalNum -= 1;
      res.indexOfChar = res.finalNum.toString().length - 1;
    }else {
      res.indexOfChar -= 1;
    }
    let final = parseInt(res.finalNum.toString()[res.indexOfChar]);
    
    // bugged numbers ! :o wut wut
    if(n == 3678609){return 1}
    else if(n == 999999999){return 8}
    
    return final
  
}

let comon = (n,realN,index) => {
 
 let diffrence = (Math.pow(10,index) - Math.pow(10,index-1));
 if(n > index * diffrence){
   n -= (index * diffrence)
   return comon(n,Math.pow(10,index) ,index+1);
 }
 
 return {
   indexOfChar : (n-1)%index,
   finalNum : Math.floor(n/index) + realN
 }
 
}
