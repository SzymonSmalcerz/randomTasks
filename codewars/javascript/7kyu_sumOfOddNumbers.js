/*


Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8


*/

function rowSumOddNumbers(n) {
	var firstNum = 2 * (n/2 * (n-1) + 1) - 1;
  var lastNum = 2 * ((n+1)/2 * (n)) - 1;
  return (firstNum+lastNum)/2 * n;
}
