/*


	There is an array of strings. All strings contains similar letters except one. 
	Try to find it!

	findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
	findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
	Strings may contain spaces. Spaces is not significant, only 
	non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

	It’s guaranteed that array contains more than 3 strings.

	This is the second kata in series:

	Find the unique number
	Find the unique string (this kata)
	Find The Unique


*/


function findUniq(arr) {
  
  var firstElementLetters = [...new Set(arr[0].toLowerCase().split("").sort())].join("");
  
  for(let i=1;i<arr.length;i++){
    let iVal = arr[i].toLowerCase();
    let iElementLetters = [...new Set(iVal.split("").sort())].join("");
    if(iElementLetters != firstElementLetters){
      if(i == 1 && [...new Set(arr[2].split("").sort())].join("") != firstElementLetters){
        return arr[0]
      }
      return arr[i]
    }
  }
  
//   beautifull but doesn't work for big arrays
//   let letters = arr.slice().map((val,index) => {
//     val = val.toLowerCase().split("");
//     return {
//       letters : [ ...new Set(val)].sort().join("").trim(),
//       index : index
//     }
//   }).sort((a,b) => a.letters >= b.letters);
  
//   return letters[0].letters == letters[1].letters ? arr[letters[letters.length-1].index] : arr[letters[0].index]
  
}


