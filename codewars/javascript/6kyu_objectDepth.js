/*

	Object depth
	Write a JavaScript function that returns the depth of an object. 
	This function takes one argument that can be any data-type.

	The depth of an object, say obj, is how many nested objects obj contains.

	Assume an empty object has a depth of 0, while an object non-empty 
	but without nested objects has a depth of 1.

	For example :

	var obj = {a: 1, b: {c: 2}};
	has a depth of 2 because it is a non-empty object containing another non-empty object.

	While :

	var emptyObj = {};
	has a depth of 0 because it is empty.

	And :

	var obj = {a: 1, b: 2, c: 3};
	has a depth of 1.

	Arrays should always return a depth of 0.

	Be careful about null.

*/




function depth(obj) {
  return recursion(obj);
}

function recursion(obj){
  
  if(obj instanceof Array){return 0}
  let insideObjArr = [];
  let hasSomethingInside = false;
  
    
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
        hasSomethingInside = true;
        if(obj[property] && obj[property].toString() !== obj[property]){
          insideObjArr.push(recursion(obj[property]));
        }
    }
  }
  
  let max = insideObjArr.sort((a,b) => b-a)[0] || 0;
  
  return hasSomethingInside ? 1 + max : 0;

}
