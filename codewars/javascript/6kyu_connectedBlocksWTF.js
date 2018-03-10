/*


 @@this challenge raped me@@
 @@ UPDATE -> challenge now raped by me :DD, new solution after some time :3@@

 Given a 10x10 grid of 100 cells, with columns indexed 0 to 9 (left to right) and rows indexed 0 to 9 (bottom to top). The input of your program will be a comma-separated string of cell identifiers, identifyng the cells that are coloured black. Each cell identifier is a two digit number of the form <column_index><row_index>.

For example, an input of 18,00,95,40,36,26,57,48,54,65,76,87,97,47 represents the following grid:

https://www.codewars.com/kata/connected-blocks/train/javascript for picture

When given this input, your program should output the size of the largest block of connected black cells, witch is outlined in red in the example above. So in this case your program would return 3.

Note that two black cells are considered to be connected if they share an edge, but they are not connected if the share only a corner.

The input could have some cells with invalid format or repeated cells that should not be taken into account.

For example: 00,00,111,1,1a is the same as 00


*/

//NEW SOLUTION : (OLD BELOW NEW)
function solution(input) {
  input = input.split(",").map(val => val.length == 2 && (parseInt(val) || val === "00") ? parseInt(val) : -1).filter((val,index,arr) => val >= 0 && index == arr.lastIndexOf(val)).sort((a,b) => a-b); 
  
  //console.log(input); //uncomment to see what I did
  
  var max = 0;
  while(input.length > 0){
    
    let temp = getMaxBlockStartingFrom(input,input[0],input[0]);
    max = max >= temp ? max : temp;
  }
  return max;
}

// input -> our array :)
// value -> :)
// id    -> just to console log our id and it clarifies a little bit more
function getMaxBlockStartingFrom(input,value,id){//recursive function, we want to reach as far as possible from starting point and count moves
  
  var indexOfValue = input.indexOf(value);
  if(indexOfValue !== -1){
//     console.log(value + "  | move id: " + id) //uncomment to see how this function work :)
    var res = 1;                                 //minimum one element in block => starting value
    input.splice(indexOfValue,1);                //remove element from table, this element is already counted to final res
    var initialInput = input.slice();
    if((value%10)%10 !== 0){//we cant go left if value is for example = 10 because 11 is not on the left side of 10 :)
      res += getMaxBlockStartingFrom(input,value-1,id);//go left
    }
    if(value%10 == 0 || (value%10)%9 !== 0){//we cant go right if value is for example = 19 because 20 is not on the right side of 19 :)
      res += getMaxBlockStartingFrom(input,value+1,id);//go right
    }
    //when we go up and down ve dont need to check anything, our initial condition of this function will verify if value if for example 99
    //and will just not find this value
    res += getMaxBlockStartingFrom(input,value-10,id);//go up
    res += getMaxBlockStartingFrom(input,value+10,id);//go down
  
    return res;
  }
  
  return 0;
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//OLD SOLUTION :

function solution(input) {
  var helperArr = [];
  var error = false;
  input = input.split(",").forEach(val => {
    
    if(val.length != 2){
      return;
    } else if(!parseInt(val) && val != "00"){
      error = true;
      return;
    }
    helperArr[parseInt(val)] = 1;
  
  });
  
  if(error){return 0}
  var arrOfObj = [];
  
  for(let k=0;k<10;k++){
    for(let w=0;w<=9;w++){
      
      let index = k*10+w;
      
      if(helperArr[index]){
        var obj = {};
        obj.arr = [];
        obj.arr.push(index);
        helperArr[index] = obj;
        if(w==9){
          arrOfObj.push(obj);
          break;
        }
        while(helperArr[index+1] && w<9){
          index+=1;
          w+=1;
          helperArr[index] = obj;
          obj.arr.push(index);
        }
        arrOfObj.push(obj);
      }
    }
  }
  
  arrOfObj.forEach(object => {
    console.log(object.arr);
    for (var property in object) {
      
      if (object.hasOwnProperty(property)) {
          object.neighbours = [];
          for(let i=0;i<object.arr.length;i++){
          let neighbour = helperArr[object.arr[i] - 10];
            if(neighbour){
              
              
              if(object.neighbours.indexOf(neighbour) == -1){
                
                object.neighbours.forEach(nei => {
                  if(nei.neighbours.indexOf(neighbour) == -1){
                    nei.neighbours.push(neighbour);
                    neighbour.neighbours.push(nei);
                  }
                });
                object.neighbours.push(neighbour);
                for(let j=0;j<neighbour.neighbours.length;j++){
                  if(object.neighbours.indexOf(neighbour.neighbours[j]) == -1){
                    
                    object.neighbours.push(neighbour.neighbours[j]);
                    
                    let neighbourOfNeighbour = neighbour.neighbours[j];
                    for(let s=0;s<neighbourOfNeighbour.neighbours.length;s++){
                        var XD = neighbourOfNeighbour.neighbours[s];
                        
                        object.neighbours.forEach(nei => {
                          if(XD.neighbours.indexOf(nei) == -1){
                            console.log(object.arr + " XDXDXD");
                            XD.neighbours.push(nei);
                            nei.neighbours.push(XD);
                          }
                        });
                    }
                    neighbourOfNeighbour.neighbours.push(object);
                  }
                };
                
                neighbour.neighbours.push(object);
                
                
              }
            }
          }
          
      }
    }
  })
  
  return (arrOfObj.reduce((total,obj) => {
    obj.val = obj.arr.length + obj.neighbours.filter((val,index,arr) => arr.lastIndexOf(val) == index && val !== obj).reduce((total,val) => total + val.arr.length ,0);
    
    if( total>obj.val ){
      return total;
    } else {
    console.log("XDDDDDDD");
    obj.neighbours = obj.neighbours.sort((a,b) => a.arr[0] - b.arr[0]).forEach(val => {console.log(val.arr)});
    console.log(obj.arr);
      return obj.val;
    }
  },0));

  
  
  
}
  


