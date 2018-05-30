/*


	Given: an array containing hashes of names

	Return: a string formatted as a list of names 
	separated by commas except for the last two names, which should be separated by an ampersand.

	Example:

	list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
	// returns 'Bart, Lisa & Maggie'

	list([ {name: 'Bart'}, {name: 'Lisa'} ])
	// returns 'Bart & Lisa'

	list([ {name: 'Bart'} ])
	// returns 'Bart'

	list([])
	// returns ''


*/


function list(names){
  let arrOfNames = names.map(name => name.name);
  let lastEl = arrOfNames.pop();
  if(arrOfNames.length == 0){
    return lastEl || "";
  } else {
    return arrOfNames.join(", ") + " & " + lastEl;
  }          
}



