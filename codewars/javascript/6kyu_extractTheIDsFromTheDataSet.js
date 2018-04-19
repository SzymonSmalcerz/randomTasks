/*


	Complete the method so that it returns an array of all ID's passed in. 
	The data structure will be similar to the following:

	var data = {
	  id: 1,
	  items: [
	    {id: 2},
	    {id: 3, items: [
	      {id: 4},
	      {id: 5}
	    ]}
	  ]
	}

	extractIds(data) // should return [1,2,3,4,5]
	The method should be able to handle the case of empty data 
	being passed in.

	Note: The only arrays that need to be traversed are those 
	assigned to the "items" property.


*/


function extractIds(data){
  return arrayHandler([data]);
}


function arrayHandler(arr){
  let res = [];
  arr.forEach(val => {
    
    for (var property in val) {
    if (val.hasOwnProperty(property)) {
        if(property == "items"){
          res = res.concat(arrayHandler(val[property]));
        }else if(property == "id"){
          res.push(val[property]);
        }
      }
    }
  
  })
  
  return res;
}
