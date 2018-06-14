/*


	The drawing shows 6 squares the sides of which have a length 
	of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the 
	perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

	Could you give the sum of the perimeters of all the squares 
	in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

	alternative text

	#Hint: See Fibonacci sequence

	#Ref: http://oeis.org/A000045

	The function perimeter has for parameter n where n + 1 is 
	the number of squares (they are numbered from 0 to n) 
	and returns the total perimeter of all the squares.

	perimeter(5)  should return 80
	perimeter(7)  should return 216


*/


function perimeter(n) {
    console.log(n);
    return 4 * getFib(n);
};

let getFib = (n) => {
  if(n <= 0){return 0}
  else if(n == 1) {return 2}
  else if(n == 2) {return 4}
  else {
    let currSum = 2;
    let n_1 = 1;
    let n_2 = 1;
    n-=2;
    while(n >= 0){
      let newN = n_1 + n_2;
      n_1 = n_2;
      n_2 = newN;
      
      currSum += n_2;
      n-=1;
    }
    return currSum;
  }
}
