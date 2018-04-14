/*


	Given an array of positive or negative integers

	I= [i1,..,in]

	you have to produce a sorted array P of the form

	[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

	P will be sorted by increasing order of the prime numbers. 
	The final result has to be given as a string in Java, C#, C, 
	C++ and as an array of arrays in other languages.

	Example:

	I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
	[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

	Notes: It can happen that a sum is 0 if some numbers are negative!

	Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears 
	in the result, the sum of the numbers for which 5 is a factor 
	is 0 so we have [5, 0] in the result amongst others.


*/

function sumOfDivided(lst) {
  
  let obj = {}; // obj stores our results
  lst = lst.sort((a,b) => Math.abs(b)-Math.abs(a));
  let maxN = Math.abs(lst[0]);// we stop checking primes at the element of the maximum num in lst
  specialCaseForTwo(obj,lst,maxN); //special case for 2 [we do because then while incrementing "n" in "doJob" method we can ommit every even digit {n+=2 instead of n+=1 => faster}]
  doJob(obj,lst,maxN); //rest cases
  console.log(maxN)
  return formatObj(obj);
  
}


let specialCaseForTwo = (obj,lst) => {
  let res = [];
  lst.forEach(val => {
    if(val%2 == 0){
      res.push(val)
    }
  });
  if(res.length > 0){
    obj["2"] = res;
  }
}
 
 
let doJob = (obj,lst,maxN) => {
  for(let n=3;n<maxN;n+=2){
    if(!isPrime(n)){continue}
    lst.forEach(val => {
      if(val % n == 0){
        let nStr = n.toString();
        obj[nStr] = obj[nStr] || [];
        obj[nStr].push(val);
      }
    })
  }
}

let isPrime = (n) => {
  
  if(n%2 == 0){return false}
  for(let i=3;i<=Math.sqrt(n);i+=2){
    if(n%i==0){return false}
  }
  return true;
}


let formatObj = (obj) => {
  
  let res = [];
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
        let sumOfValues = obj[property].reduce((t,v) => t+v,0);
        res.push([parseInt(property),sumOfValues]);
    }
  }
  return res;

}
