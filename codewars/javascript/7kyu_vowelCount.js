/*

	Return the number (count) of vowels in the given string.

	We will consider a, e, i, o, and u as vowels for this Kata.

	The input string will only consist of lower case letters and/or spaces.

*/


function getCount(str) {
  let vowels = {
    a : true,
    e : true,
    i : true,
    o : true,
    u : true
  };
  return str.split("").filter(v=>vowels[v]).length;
}
