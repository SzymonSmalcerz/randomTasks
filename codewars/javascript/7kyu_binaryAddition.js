/*


	Implement a function that adds two numbers together and returns their sum in binary. 
	The conversion can be done before, or after the addition.
	The binary number returned should be a string.


*/


function addBinary(a,b) {
  var c = a+b;
  var res = "";
  while( c > 0 ){
    if(c%2 == 0){res = "0" + res}
    else {res = "1" + res}
    c = c >> 1;
  }
  return res;
}
