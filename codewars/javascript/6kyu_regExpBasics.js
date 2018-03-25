/*


	Implement String#ipv4_address?, which should return true if 
	given object is an IPv4 address - four numbers (0-255) separated by dots.

	It should only accept addresses in canonical representation, 
	so no leading 0s, spaces etc.


*/


String.prototype.ipv4Address=function(){
  let str = this;
  if(str.trim() != str)
    return false
  str = str.split(/[.+]/);
  if(str.length != 4 || str.filter(val => (parseInt(val) || val === "0") && parseInt(val) >= 0 && parseInt(val) <= 255 && (val[0] != "0" || val == "0")).length != 4 )
    return false;
  return true;
}

