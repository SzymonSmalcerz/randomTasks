/*


	Given a string of binary numbers of length 3 sort the numbers 
	in ascending order but only order the even numbers and leave all odd numbers in their place.

	Example:

	evenBinary("101 111 100 001 010") //returns "101 111 010 001 100"
	Note: make sure all the binary numbers have a length of 3


*/


function evenBinary(n) {
  var evenNumbers = [];
  n.split(" ").forEach(val => {
    if(parseInt(val,2)%2 == 0){
      evenNumbers.push(val);
    }
  });
  
  evenNumbers = evenNumbers.sort();
  
  return n.split(" ").map(val => {
    if(parseInt(val,2)%2 == 0){
      return evenNumbers.shift();
    }
    return val;
  }).join(" ");
}
