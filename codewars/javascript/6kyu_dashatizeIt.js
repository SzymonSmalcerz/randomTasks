/*


	Given a number, return a string with dash'-'marks before and 
	after each odd integer, but do not begin or end the string with a dash mark.

	Ex:

	dashatize(274) -> '2-7-4'
	dashatize(6815) -> '68-1-5'


*/


function dashatize(num) {
  if(!num && num !== 0){return "NaN"}
  num = [...""+num].filter(val => parseInt(val) || parseInt(val) === 0)
                   .map(val => parseInt(val)%2 == 1 ? " " + val + " " : val)
                   .join("")
                   .trim();
  return num.replace(/[ ]+/g,"-");
};
