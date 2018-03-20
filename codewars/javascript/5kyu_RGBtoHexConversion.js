/*

	The rgb() method is incomplete. Complete the method so that passing in RGB 
	decimal values will result in a hexadecimal representation being returned. 
	The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument 
	values that fall out of that range should be rounded to the closest valid value.

	The following are examples of expected output values:

	rgb(255, 255, 255) // returns FFFFFF
	rgb(255, 255, 300) // returns FFFFFF
	rgb(0,0,0) // returns 000000
	rgb(148, 0, 211) // returns 9400D3

*/


function rgb(r, g, b){
  r = r > 255 ? 255 : r < 0 ? "00" : r < 10 ? "0" + r : r;
  g = g > 255 ? 255 : r < 0 ? "00" : g < 10 ? "0" + g : g;
  b = b > 255 ? 255 : b < 0 ? "00" : b < 10 ? "0" + b : b;
  
  return r.toString(16).toUpperCase() + g.toString(16).toUpperCase() + b.toString(16).toUpperCase();
}
