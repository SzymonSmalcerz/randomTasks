/*


	You will be given a string (map) featuring a cat "C" and a mouse "m". 
	The rest of the string will be made up of dots (".") The cat can move 
	the given number of moves up, down, left or right, but not diagonally.

	You need to find out if the cat can catch the mouse from it's current 
	position and return "Caught!" or "Escaped!" respectively.

	Finally, if one of two animals are not present, return 
	"boring without two animals".

	Examples
	moves = 5

	map =
	..C......
	.........
	....m....

	returns "Caught!" because the cat can catch the mouse in 4 moves
	moves = 5

	map =
	.C.......
	.........
	......m..

	returns "Escaped!" because the cat cannot catch the mouse in  5 moves


*/


function catMouse(map,moves){
  map = map.split("\n").map(val => val.split(""));
  let catCoords = {};
  let mouseCoords = {};
  
  map.forEach((val,row) =>{
    if(val.indexOf("C") != -1){
      catCoords = {
        x : val.indexOf("C"),
        y : row
      }
    }
    if(val.indexOf("m") != -1){
      mouseCoords = {
        x : val.indexOf("m"),
        y : row
      }
    }
  })
  let distance = Math.abs(mouseCoords.x-catCoords.x) + Math.abs(mouseCoords.y-catCoords.y);
  
  return distance ? distance > moves ? 'Escaped!' : 'Caught!' : 'boring without two animals'
}
