/*


ask
While babysitting, you decided to complete a jigsaw puzzle to pass the time. You spent hours carefully placing each puzzle piece into its correct location. Just as you finished, the child you were babysitting decided to play Godzilla and karate chopped your finished jigsaw puzzle right down the middle. Most of the pieces stayed in place, but some pieces flied off the table. For damage control, you decided to just push the puzzle back together.

Given an array of strings representing the destroyed puzzle p, return the number of puzzle pieces n that are missing from the middle after you push the puzzle back together.

The strings in the array will contain either 'X' representing a puzzle piece or 'O' representing an empty space. Every row of puzzle will only have either 0 or 1 consecutive set of missing pieces.

Input/Output
[input] string array p

Array of strings representing each row of the smashed jigsaw puzzle. Each string consists of characters 'X' and 'O'.

It is guaranteed that each string contains no more that one contiguous subarray of 'O's.

[output] an integer

The number of holes in the puzzle after pushing the smashed puzzle back together

Example
For p = ["XXXXOOOXXXXX", "XXXOOXXXXXXX", "XXXXXOOOXXXX", "XXXXOOOOXXXX"],

the output should be 4.

For the given p, the smashed puzzle looks like this:

XXXXOOOXXXXX
XXXOOXXXXXXX
XXXXXOOOXXXX
XXXXOOOOXXXX
After pushing the puzzle together (until the left and right sides of at least one row come into contact), you end up with:

XXXXOXXXXX
XXXXXXXXXX
XXXXXOXXXX
XXXXOOXXXX
Note that there are still 4 missing pieces ('O's) in the puzzle. So the output is 4.


*/


function brokenJigsaw(p) {
   p = p.map(str => str.split("").reduce((total,letter) => letter == 'O' ? total + 1 : total,0))
   p.sort((a,b) => a-b)
   firstElement = p[0];
   return p.reduce((total,val) => total + (val - firstElement),0)
}
