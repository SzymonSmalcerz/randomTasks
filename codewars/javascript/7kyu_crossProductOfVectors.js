/*


	Make a function called crossProduct that takes two 3 dimensional 
	vectors (in the form of two arrays) and returns their cross product. 
	You need to check if the passed arguments are of the expected format, 
	otherwise throw the message: "Arguments are not 3D vectors!".

	crossProduct([1,0,0],[0,1,0]) //should return [0,0,1]
	crossProduct('gobbledigook', [1,1,1]) //should throw the 
	string "Arguments are not 3D vectors!"
	Your function should handle non integers.


*/


function crossProduct (v1=1, v2=2) {
  if(v1.length !== 3 || v2.length !== 3){
    throw "Arguments are not 3D vectors!"
  }
  return [v1[1]*v2[2] - v1[2]*v2[1],v1[2]*v2[0] - v1[0]*v2[2],v1[0]*v2[1] - v1[1]*v2[0]]
  
}
