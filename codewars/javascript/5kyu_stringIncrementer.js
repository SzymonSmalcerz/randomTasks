/*


	Your job is to write a function which increments a string, to create a new string. 
	If the string already ends with a number, the number should be incremented by 1. 
	If the string does not end with a number the number 1 should be appended to the new string.

	Examples:

	foo -> foo1

	foobar23 -> foobar24

	foo0042 -> foo0043

	foo9 -> foo10

	foo099 -> foo100

	Attention: If the number has leading zeros the amount of digits should be considered.


*/


function incrementString (strng) {
  let num = undefined;
  let incrementer = 1;
  while(strng.length > 0 && strng.slice(-1).search(/[1-9]/) != -1){
    
    num = num + parseInt(strng.slice(-1))*incrementer || parseInt(strng.slice(-1));
    strng = strng.slice(0,-1);
    incrementer *= 10;
  } 
  
  
  if(num === undefined){
    if(strng.slice(-1).search("0") != -1){
      return strng.slice(0,-1) + "1"
    }
    return strng + "1"
  }else {
    return (num + 1).toString().length > (num).toString().length ? strng.slice(-1).search("0") == 0 ? strng.slice(0,-1) + (num + 1) : strng + (num + 1) : strng + (num + 1);
  }
}
