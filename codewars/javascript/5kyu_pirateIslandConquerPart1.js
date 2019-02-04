/*

https://www.codewars.com/kata/pirate-island-conquer-part-1/train/javascript

This kata is part of a series. Check this out when you're done:

Pirate Island Conquer Part 2

Description

You are a captain on a pirate ship. You are looking to conquer islands, so that you can do lots of piratey stuff on those islands. Let's take a look at your pirate map of the area:

Map

                      x
         0    1    2    3    4    5    6    7

  0    ['p', '~', '~', '~', '~', '~', '~', '~'],
  1    ['~', '~', '~', '~', '~', '~', '~', '~'],
  2    ['~', '~', '~', '~', '~', '~', '~', '~'],
  3    ['~', '~', 'u', '~', '~', '~', '~', '~'],
y 4    ['~', '~', '~', '~', 'm', '~', '~', '~'],
  5    ['~', '~', '~', '~', '~', '~', '~', '~'],
  6    ['~', '~', '~', '~', '~', '~', '~', '~'],
  7    ['~', '~', '~', '~', '~', '~', '~', '~']];
where 'p' = pirate (that's our home island) 'u' = unoccupied island 'm' = island occupied by marines '~' = ocean waves

The map size will always be 8 x 8.

Coordinates

Given as [y, x]. Examples from the above map:

'p' at [0,0]

'u' at [3, 2]

'm' at [4, 4]

Aboard your ship, you have some rules for choosing an island to conquer.

Rules (in order of highest priority)

Conquer an unoccupied island if possible. If there are no unoccupied islands on the map, conquer one of the marines' islands.

Conquer the island closest to our home island (the 'p'), which is always at [0,0]. If there is a tie between two or more islands the same distance away, return the location of both. (But rule #1 has higher priority).

How to conquer an island

Return the coordinates of the island to be conquered [y, x]. If there is a tie between two or more islands the same distance away, return all the coordiantes [[y, x], [y, x]...].

Distance

Pirates can only move vertically and horizontally, not diagonally. Moving one index in the array is one unit of distance. Examples:

Example 1: The 'u' island is 2 units away:

    ['p', '~', 'u', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ...
Example 2: The 'u' island is 3 + 2 = 5 units away.

  |  ['p', '~', '~', '~', '~', '~', '~', '~'],
  |  ['~', '~', '~', '~', '~', '~', '~', '~'],
3 |  ['~', '~', '~', '~', '~', '~', '~', '~'],
  |  ['~', '~', 'u', '~', '~', '~', '~', '~'],
  |---------->
      2
Task

Write a function that accepts a 2D array representing the map and return the coordinates of the island to conquer. If there are no 'm' or 'u' islands on the map, return an empty array []. If there is a tie between two or more islands the same distance away, return the location of all of them.

Input: [[Strings]] 8 x 8 2D array of strings.

Output:

For one island: [int, int] y and x coordinates given as integers [y, x].

Or, for a tie, [[y, x], [y, x]...] sorted by lowest 'y' to highest, then by lowest 'x' to highest.

Examples:

Example 1:

    map = [
    ['p', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', 'm', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', 'u', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']];
There is a 'u' and an 'm'. Rules say we conquer a 'u' if possible, so...

solution = [4, 4]

Example 2:

    map = [
    ['p', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', 'm', '~', '~', '~', '~'],
    ['m', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', 'm', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', 'm', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']];
Example 3:

    map = [
    ['p', '~', '~', '~', '~', '~', '~', '~'],
    ['~', 'm', '~', 'm', '~', '~', '~', '~'],
    ['m', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', 'm', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', 'm', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']];
There are no 'u' islands, so we'll take an 'm'. But wait! There are two the same distance away.

solution = [[1, 1], [2, 0]]; *Not [[2, 0], [1, 1]] lowest 'y' value first.

Pirate Island Conquer Part 2

*/


function conquerIsland(map) {
  let result = {
    distance : map.length * map.length + 1,
    islands : [],
    type : 'm',
    setNew : function(x,y,type) {
      this.distance = x + y;
      this.islands = [[y,x]];
      this.type = type || 'm';
    }
  }


  for(let y = 0; y < map.length; y++ ) {
    for( let x = 0; x < map[0].length; x++ ) {
     if(map[y][x] == 'u') {
       if(result.type == 'm' || result.distance > (x+y) ) {
         result.setNew(x,y,'u');
       } else if( result.distance == (x+y) ) {
         result.islands.push([y,x]);
       }
     } else if(map[y][x] == 'm') {
       if(result.type == 'm') {
         if( result.distance > (x+y) ) {
           result.setNew(x,y);
         } else if( result.distance == (x+y) ) {
           result.islands.push([y,x]);
         }
       }
     }
    }
  }

  return result.islands.length > 1 ? result.islands : result.islands[0] ? result.islands[0] : [];
}
