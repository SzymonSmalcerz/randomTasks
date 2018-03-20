/*


	Check to see if a string has the same amount of 'x's and 'o's. 
	The method must return a boolean and be case insensitive. The string can contain any char.

	Examples input/output:

	XO("ooxx") => true
	XO("xooxx") => false
	XO("ooxXm") => true
	XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
	XO("zzoo") => false


*/



function XO(str) {
    return str.length == 0 || (str.split("").map(val => val.toUpperCase()).sort((a,b) => a-b).reduce((total,val) => val == "X" ? total + 1 : val == "O" ? total -1 : total,0) == 0 && str.split("").map(val => val.toUpperCase()).join("").indexOf("X") != -1);
}
