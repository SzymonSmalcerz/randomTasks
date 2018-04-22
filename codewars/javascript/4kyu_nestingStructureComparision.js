/*



	Complete the function/method (depending on the language) to return true/True when 
	its argument is an array that has the same nesting structure as the first array.

	For example:

	 // should return true
	[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
	[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

	 // should return false 
	[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
	[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

	// should return true
	[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

	// should return false
	[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
	For your convenience, there is already a function 'isArray(o)' declared and defined 
	that returns true if its argument is an array, false otherwise.



*/


Array.prototype.sameStructureAs = function (other,guard) {
    if(!guard && (!(other instanceof Array) || !other.sameStructureAs(this,true))){
      return false;
    }
    for(let index=0;index<this.length;index++){
      let val = this[index];
      if(val instanceof Array){
        if(!other[index] instanceof Array || !val.sameStructureAs(other[index])){
          return false;
        }
      }else {
        if(other[index] instanceof Array || other[index] === undefined){
          return false;
        }
      }
    
    }
    return true;
};

