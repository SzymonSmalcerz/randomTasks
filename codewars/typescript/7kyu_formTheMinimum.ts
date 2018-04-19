/*

	Given a list of digits, return the smallest number that could 
	be formed from these digits, using the digits only once (= ignore duplicates).

	Note: Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

	Examples
	[1, 3, 1]  ==> 13

	[5, 7, 5, 9, 7]  ==> 579

	[1, 9, 3, 1, 7, 4, 6, 6, 7] ==> 134679
	ALL Translation are Welcomed (In Any Language )
	If you Enjoyed this Kata , Then How About Monkey With Numbers in this 

*/

export const minValue = (values: number[]): number => {
  let lol : number[] = values.filter((val,index) => values.indexOf(val) === index);
  lol.sort((a,b) => a-b)
  let stringRes : string = lol.join("");
  return parseInt(stringRes);
};
