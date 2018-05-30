/*

	Complete the function that takes two numbers as input, 
	num and nth and return the nth digit of num (counting from right to left).

	Note
	If num is negative, ignore its sign and treat it as a positive value
	If nth is not positive, return -1
	Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
	Examples
	findDigit(5673, 4)     returns 5
	findDigit(129, 2)      returns 2
	findDigit(-2825, 3)    returns 8
	findDigit(-456, 4)     returns 0
	findDigit(0, 20)       returns 0

*/


var findDigit = function(num, nth){
    num = Math.abs(num);
    if(nth>0){
      while(nth>1){
        num = Math.floor(num/10);
        nth -= 1;
      }
      return num%10;
    } else {
      return -1;
    }
}


// or second version 

var findDigit = function(num, nth){
    if(nth>0){
      let numArr = [0].concat([...Math.abs(num).toString()].reverse());
      return numArr.length - nth > 0 ? parseInt(numArr[nth]) : 0;
    } else {
      return -1;
    }
}
