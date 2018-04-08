/*


	Someone was hacking the score. Each student's record is given as an array 
	The objects in the array are given again as an array of scores for each name and total score. ex>

	var array = [
	["name1", 445, ["B", "A", "A", "C", "A", "A"]],
	["name2", 140, ["B", "A", "A", "A"]],
	["name3", 200, ["B", "A", "A", "C"]]
	];
	The scores for each grade is:

	A: 30 points
	B: 20 points
	C: 10 points
	D: 5 points
	Everything else: 0 points
	If there are 5 or more courses and all courses has a grade of B or above, additional 
	20 points are awarded. After all the calculations, the total score should be capped at 200 points.

	Returns the name of the hacked name as an array when scoring with this rule.

	var array = [
	["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
	["name2", 140, ["B", "A", "A", "A"]], //  name2 point is right
	["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
	];

	  return ["name1", "name2"]


*/


function findHack(arr) {
  let res = [];
  arr.forEach(val => {
    if(val[1] > 200 || sum(val[2]) != val[1]){
      res.push(val[0]);
    }
  });
  return res;
}

let dictionary = {
  "A" : 30,
  "B" : 20,
  "C" : 10,
  "D" : 5
}

let sum = (arr) => {
  let bonus = 0;
  if(arr.length > 4){
    arr = arr.sort();
    if(arr[arr.length-1] == "B" || arr[arr.length-1] == "A"){
      bonus = 20;
    }
  }
  return bonus + arr.reduce((total,val) => dictionary[val] ? total + dictionary[val] : total,0);
}
